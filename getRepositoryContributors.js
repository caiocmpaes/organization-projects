import { lambdalize } from 'compredesconte-utils'
import request from 'request-promise'

export const handler = lambdalize(({ pathParams }) => (
  request({
    uri: `https://github.com/${pathParams.owner}/${pathParams.name}/graphs/contributors-data`,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    json: true
  })
))
