import fetch from 'isomorphic-fetch'
import { request } from './client'

/**
 * GraphQL Query to fetch Repository details data.
 *
 * @type {String} GraphQL query for GitHub API v4
 */
const fetchRepositoryQuery = `
query($owner:String!, $name:String!) {
  repository(owner: $owner, name: $name) {
    name
    description
    url
    stargazers {
      totalCount
    }
    forkCount
    watchers {
      totalCount
    }
    issues(states:[OPEN]) {
      totalCount
    }
    pullRequests(states:[OPEN]) {
      totalCount
    }
    licenseInfo {
      name
      url
    }
    primaryLanguage {
      color
      name
    }
  }
}
`

/**
 * Runs a GraphQL query to GitHub v4 API to get repository details.
 * @param  {String} owner Organization login/name
 * @param  {String} name  Repository name
 * @return {Object}       Repository details
 */
export const fetchRepositoryInfo = (owner, name) => (
  request(fetchRepositoryQuery, { owner, name })
    .then(data => data.repository)
)

/**
 * Executes an HTTP request to server to fetch the repository's collaborators.
 *
 * !IMPORTANT!
 * This information is not available by GitHub v4 GraphQL API. The API only exposes
 * the collaborators of a project if the user making the API request have `push permissions`
 * to the repository.
 * See the `getRepositoryContributors.js` file to see how the data could be retrieved ;)
 *
 * @param  {String} owner Organization login/name
 * @param  {String} name) Repository name
 * @return {Object}       Repository list of TOP 100 contributors
 */
export const fetchRepositoryContributors = (owner, name) => (
  fetch(`/contributors/${owner}/${name}`)
    .then(response => (
      response.ok ? response.json() : Promise.reject(new Error('Could not Fetch Data'))
    ))
)
