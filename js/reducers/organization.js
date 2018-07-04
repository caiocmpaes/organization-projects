import { Record } from 'immutable'
import {
  FETCH_ORGANIZATION_DATA_SUCCESS
} from '../actions'

const OrganizationRecord = Record({
  login:             undefined,
  repositoriesCount: undefined
})

const organization = (state = new OrganizationRecord(), action) => {
  switch (action.type) {
    case FETCH_ORGANIZATION_DATA_SUCCESS:
      return new OrganizationRecord({
        login: action.organization.login,
        repositoriesCount: action.organization.repositories.totalCount
      })

    default:
      return state
  }
}

export default organization
