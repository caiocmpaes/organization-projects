import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import BasicInfoCard from './BasicInfoCard'
import ContributorsList from './ContributorsList'
import CountersCard from './CountersCard'
import LicenseAndLanguageCard from './LicenseAndLanguageCard'

const DetailsView = ({ show }) => {
  if (show) {
    return (
      <div id="details-view">
        <Row>
          <Col xs={4}>
            <BasicInfoCard />
          </Col>
          <Col xs={4}>
            <CountersCard />
          </Col>
          <Col xs={4}>
            <LicenseAndLanguageCard />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ContributorsList />
          </Col>
        </Row>
      </div>
    )
  }
  return <span />
}

DetailsView.propTypes = {
  show: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  show: state.details.repositoryName !== undefined
})

export default connect(
  mapStateToProps
)(DetailsView)
