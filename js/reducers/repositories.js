import { Map, Record } from 'immutable'
import { map, reduce } from 'lodash'
import {
  FETCH_ORGANIZATION_DATA_SUCCESS,
  SHOW_REPOSITORY_DETAILS_SUCCESS
} from '../actions'

const defaultLicense = {
  name: 'No License',
  url: undefined
}

export const RepositoryRecord = Record({
  name: undefined,
  description: '', // Optional
  url: undefined,
  license: defaultLicense, // Optional
  primaryLanguage: {
    color: undefined,
    name: undefined
  },
  starsCount: undefined,
  forksCount: undefined,
  watchersCount: undefined,
  issuesCount: undefined,
  pullRequestsCount: undefined
})

const buildRepositoryBasicInfo = ({ name, watchers }) => (
  new RepositoryRecord({
    name,
    watchersCount: watchers.totalCount,
  })
)

const buildLicenseInfo = license => (
  license ? { name: license.name, url: license.url } : defaultLicense
)

const buildRepositoryFullInfo = repository => (
  new RepositoryRecord({
    ...repository,
    license: buildLicenseInfo(repository.licenseInfo),
    starsCount: repository.stargazers.totalCount,
    forksCount: repository.forkCount,
    watchersCount: repository.watchers.totalCount,
    issuesCount: repository.issues.totalCount,
    pullRequestsCount: repository.pullRequests.totalCount
  })
)

const repositories = (state = Map(), action) => {
  switch (action.type) {
    case FETCH_ORGANIZATION_DATA_SUCCESS:
      return Map(
        reduce(
          map(action.organization.repositories.edges, edge => buildRepositoryBasicInfo(edge.node)),
          (obj, repository) => {
            obj[repository.name] = repository
            return obj
          },
          {}
        )
      )

    case SHOW_REPOSITORY_DETAILS_SUCCESS:
      return state.set(action.repository.name, buildRepositoryFullInfo(action.repository))

    default:
      return state
  }
}

export default repositories
