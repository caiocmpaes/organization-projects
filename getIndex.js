import { lambdalize } from 'compredesconte-utils'
import indexTemplate from './views/index.pug'

export const handler = lambdalize(({ respond, respondHTML }) => {
  Promise.resolve(
    indexTemplate({
      staticAssetsEndpoint: 'http://localhost:5001'
    }))
    .then(respondHTML)
    .catch(respond)
})
