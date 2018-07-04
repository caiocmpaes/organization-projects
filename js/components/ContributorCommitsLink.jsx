import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ContributorCommitsLink = ({ login, totalCommits, organization, repository }) => (
  <a href={`https://github.com/${organization}/${repository}/commits?author=${login}`}>
    <span className="commits text">
      {`${totalCommits} commits`}
    </span>
  </a>
)

ContributorCommitsLink.propTypes = {
  login: PropTypes.string.isRequired,
  totalCommits: PropTypes.number.isRequired,
  organization: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  organization: state.organization.login,
  repository: state.details.repositoryName
})

export default connect(
  mapStateToProps
)(ContributorCommitsLink)
