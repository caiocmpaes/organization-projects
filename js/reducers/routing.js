import { Record } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

const RoutingRecord = Record({
  location: undefined
})

const immutableRouteReducer = (state = new RoutingRecord(), action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('location', action.payload)
  }
  return state
}

export default immutableRouteReducer
