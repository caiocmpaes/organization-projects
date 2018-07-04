// ======== FETCH ORGANIZATION DATA ========

// Action to fetch the initial data of the Organization from GitHub API
export const FETCH_ORGANIZATION_DATA = 'FETCH_ORGANIZATION_DATA'
export const fetchOrganizationData = (name = 'facebook') => ({
  type: FETCH_ORGANIZATION_DATA,
  name
})

// Action to notify reducers of Organization data received with success
export const FETCH_ORGANIZATION_DATA_SUCCESS = 'FETCH_ORGANIZATION_DATA_SUCCESS'
export const fetchOrganizationDataSuccess = organization => ({
  type: FETCH_ORGANIZATION_DATA_SUCCESS,
  organization
})

// Action to notify reducers of Organization data not received (error happened)
export const FETCH_ORGANIZATION_DATA_ERROR = 'FETCH_ORGANIZATION_DATA_ERROR'
export const fetchOrganizationDataError = error => ({
  type: FETCH_ORGANIZATION_DATA_ERROR,
  error
})

// ======== FETCH REPOSITORY DATA ========

// Action to display a given repository details
export const SHOW_REPOSITORY_DETAILS = 'SHOW_REPOSITORY_DETAILS'
export const showRepositoryDetails = (owner, name) => ({
  type: SHOW_REPOSITORY_DETAILS,
  owner,
  name
})

// Action to notify reducers of Repository details data received with success
export const SHOW_REPOSITORY_DETAILS_SUCCESS = 'SHOW_REPOSITORY_DETAILS_SUCCESS'
export const showRepositoryDetailsSuccess = repository => ({
  type: SHOW_REPOSITORY_DETAILS_SUCCESS,
  repository
})

// Action to notify reducers of Repository details not received (error happened)
export const SHOW_REPOSITORY_DETAILS_ERROR = 'SHOW_REPOSITORY_DETAILS_ERROR'
export const showRepositoryDetailsError = error => ({
  type: SHOW_REPOSITORY_DETAILS_ERROR,
  error
})

// ======== FETCH CONTRIBUTORS DATA ========

// Action to notify reducers of contributors list received with success
export const SHOW_REPOSITORY_CONTRIBUTORS_SUCCESS = 'SHOW_REPOSITORY_CONTRIBUTORS_SUCCESS'
export const showRepositoryContributorsSuccess = contributors => ({
  type: SHOW_REPOSITORY_CONTRIBUTORS_SUCCESS,
  contributors
})

// Action to notify reducers of contributors list not received (error happened)
export const SHOW_REPOSITORY_CONTRIBUTORS_ERROR = 'SHOW_REPOSITORY_CONTRIBUTORS_ERROR'
export const showRepositoryContributorsError = error => ({
  type: SHOW_REPOSITORY_CONTRIBUTORS_ERROR,
  error
})
