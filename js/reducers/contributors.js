import {  List, Record } from 'immutable'
import { sum, findLastIndex } from 'lodash'
import {
  SHOW_REPOSITORY_DETAILS,
  SHOW_REPOSITORY_CONTRIBUTORS_SUCCESS
} from '../actions'

export const ContributorRecord = Record({
  login: undefined,
  avatar: undefined,
  totalCommits: undefined,
  totalLineAdditions: undefined,
  totalLineDeletions: undefined,
  weeksSinceLastCommit: undefined
})

const authorWeekHasContribution = ({ a, d, c }) => (
  a !== 0 || d !== 0 || c !== 0
)

const getWeeksSinceLastCommit = weeks => (
  weeks.length - findLastIndex(weeks, authorWeekHasContribution) - 1
)

const contributors = (state = List(), action) => {
  switch (action.type) {
    case SHOW_REPOSITORY_CONTRIBUTORS_SUCCESS:
      return List.of(...action.contributors.map(contributor => (
        new ContributorRecord({
          login: contributor.author.login,
          avatar: contributor.author.avatar,
          totalCommits: contributor.total,
          totalLineAdditions: sum(contributor.weeks.map(week => week.a)),
          totalLineDeletions: sum(contributor.weeks.map(week => week.d)),
          weeksSinceLastCommit: getWeeksSinceLastCommit(contributor.weeks)
        })
      )))

    case SHOW_REPOSITORY_DETAILS:
      return List()

    default:
      return state
  }
}

export default contributors
