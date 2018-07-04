import { Record } from 'immutable'
import {
  SHOW_REPOSITORY_DETAILS_SUCCESS
} from '../actions'

const DetailsViewRecord = Record({
  repositoryName: undefined
})

const details = (state = new DetailsViewRecord(), action) => {
  switch (action.type) {
    case SHOW_REPOSITORY_DETAILS_SUCCESS:
      return state.set('repositoryName', action.repository.name)

    default:
      return state
  }
}

export default details
