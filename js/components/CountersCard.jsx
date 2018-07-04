import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import InfoBadge from './InfoBadge'

const CountersCard = ({ watchers, stars, forks, issues, pulls }) => (
  <div id="counters-card">
    <Row>
      <Col xs={4}>
        <InfoBadge text={watchers} octicon="eye" />
      </Col>
      <Col xs={4}>
        <InfoBadge text={stars} octicon="star" />
      </Col>
      <Col xs={4}>
        <InfoBadge text={forks} octicon="repo-forked" />
      </Col>
    </Row>
    <Row>
      <Col xs={6} className="issues">
        <InfoBadge text={issues} octicon="issue-opened" />
      </Col>
      <Col xs={6} className="pulls">
        <InfoBadge text={pulls} octicon="git-pull-request" />
      </Col>
    </Row>
  </div>
)

CountersCard.propTypes = {
  watchers: PropTypes.number.isRequired,
  stars:    PropTypes.number.isRequired,
  forks:    PropTypes.number.isRequired,
  issues:   PropTypes.number.isRequired,
  pulls:    PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  const name = state.details.repositoryName
  const repository = state.repositories.get(name)
  return {
    watchers: repository.watchersCount,
    stars:    repository.starsCount,
    forks:    repository.forksCount,
    issues:   repository.issuesCount,
    pulls:    repository.pullRequestsCount
  }
}

export default connect(
  mapStateToProps
)(CountersCard)
