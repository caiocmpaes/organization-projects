import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'immutable'
import { connect } from 'react-redux'
import { ListGroup, Row, Col } from 'react-bootstrap'
import { PulseLoader } from 'react-spinners'
import ContributorsListItem from './ContributorsListItem'

const ContributorsList = ({ contributors }) => (
  <div id="contributors-list">
    {contributors.isEmpty() ? (
      <Row>
        <Col xs={12} style={{ textAlign: 'center', marginTop: '60px' }}>
          <PulseLoader />
        </Col>
      </Row>
    ) : (
      <div>
        <h4>
          {'Top 100 Contributors'}
        </h4>
        <ListGroup>
          {contributors.map((contributor, index) => (
            <ContributorsListItem
              key={contributor.login}
              rank={index + 1}
              avatar={contributor.avatar}
              login={contributor.login}
              totalCommits={contributor.totalCommits}
              totalLineAdditions={contributor.totalLineAdditions}
              totalLineDeletions={contributor.totalLineDeletions}
              weeksSinceLastCommit={contributor.weeksSinceLastCommit}
            />
          ))}
        </ListGroup>
      </div>
    )}
  </div>
)

ContributorsList.propTypes = {
  contributors: PropTypes.instanceOf(List).isRequired
}

const mapStateToProps = state => ({
  contributors: state.contributors.sortBy(contributor => contributor.totalCommits).reverse()
})

export default connect(
  mapStateToProps
)(ContributorsList)
