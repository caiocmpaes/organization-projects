import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `bearer ${process.env.GITHUB_OAUTH_TOKEN}`
  }
})

export const request = (query, variables) => (
  client.request(query, variables)
)
