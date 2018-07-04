import { Record } from 'immutable'

import routing from './routing'
import organization from './organization'
import repositories from './repositories'
import contributors from './contributors'
import details from './details'

export const RootStateRecord = Record({
  routing:      undefined,
  organization: undefined,
  repositories: undefined,
  contributors: undefined,
  details:      undefined
}, 'RootStateRecord')

const rootReducer = (state = new RootStateRecord(), action) => (
  state.merge({
    routing:      routing(state.routing, action),
    organization: organization(state.organization, action),
    repositories: repositories(state.repositories, action),
    contributors: contributors(state.contributors, action),
    details:      details(state.details, action)
  })
)

export default rootReducer
