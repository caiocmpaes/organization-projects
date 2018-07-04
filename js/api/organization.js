import { doWhilst } from 'promise-async'
import { request } from './client'

/**
 * GraphQL Query to fetch Organization initial data, with repositories and Its watchers count.
 *
 * OBS.: As GitHub limits results to a max of 100 itens, we get pagination information to perform
 * subsequent queries for more data.
 *
 * @type {String} GraphQL query for GitHub API v4
 */
const fetchAllRepositoriesQuery = `
query($owner_name:String!, $cursor:String) { 
  organization(login: $owner_name) {
    login
    repositories(affiliations: [OWNER], first: 100, after: $cursor) {
      totalCount
      edges {
        node {
          name
          watchers {
            totalCount
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
`

/**
 * Fetches the organization list of repositories from GitHub GraphQL API.
 * Have to retrieve all the repositories in order to rank them correctly by watchers.
 *
 * @param  {String} name Name of the repository on GitHub
 * @return {Object}      Organization data with repositories
 */
export const fetchAllRepositoriesOfOrganization = (name) => {
  let hasNextPage
  let endCursor = null
  let organization = {}
  return doWhilst((callback) => {
    request(fetchAllRepositoriesQuery, { owner_name: name, cursor: endCursor })
      .then((data) => {
        if (endCursor) {
          const { edges } = organization.repositories
          organization.repositories.edges = edges.concat(data.organization.repositories.edges)
        } else {
          ({ organization } = data)
        }
        ({ hasNextPage, endCursor } = data.organization.repositories.pageInfo)
        callback(null)
      })
  }, () => hasNextPage)
    .then(() => organization)
}
