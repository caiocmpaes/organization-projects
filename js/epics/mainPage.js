import { from } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { combineEpics, ofType } from 'redux-observable'
import {
  fetchAllRepositoriesOfOrganization,
  fetchRepositoryInfo,
  fetchRepositoryContributors
} from '../api'
import {
  FETCH_ORGANIZATION_DATA,
  SHOW_REPOSITORY_DETAILS,
  fetchOrganizationDataSuccess,
  fetchOrganizationDataError,
  showRepositoryDetailsSuccess,
  showRepositoryDetailsError,
  showRepositoryContributorsSuccess,
  showRepositoryContributorsError
} from '../actions'

const fetchOrganizationDataEpic = action$ => action$.pipe(
  ofType(FETCH_ORGANIZATION_DATA),
  mergeMap(({ name }) => (
    from(fetchAllRepositoriesOfOrganization(name)
      .then(fetchOrganizationDataSuccess)
      .catch(fetchOrganizationDataError)
    )
  ))
)

const fetchRepositoryDataEpic = action$ => action$.pipe(
  ofType(SHOW_REPOSITORY_DETAILS),
  mergeMap(({ owner, name }) => (
    from(fetchRepositoryInfo(owner, name)
      .then(showRepositoryDetailsSuccess)
      .catch(showRepositoryDetailsError)
    )
  ))
)

const fetchRepositoryContributorsEpic = action$ => action$.pipe(
  ofType(SHOW_REPOSITORY_DETAILS),
  mergeMap(({ owner, name }) => (
    from(fetchRepositoryContributors(owner, name)
      .then(showRepositoryContributorsSuccess)
      .catch(showRepositoryContributorsError)
    )
  ))
)

export default combineEpics(
  fetchOrganizationDataEpic,
  fetchRepositoryDataEpic,
  fetchRepositoryContributorsEpic
)
