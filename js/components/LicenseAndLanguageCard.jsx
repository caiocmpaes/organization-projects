import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import InfoBadge from './InfoBadge'

const CountersCard = ({ license, primaryLanguage }) => (
  <Row id="license-language-card">
    <Col xs={6}>
      <InfoBadge text={license.name} octicon="law" url={license.url} />
    </Col>
    <Col xs={6} style={{ color: primaryLanguage.color }}>
      <InfoBadge text={primaryLanguage.name} octicon="code" />
    </Col>
  </Row>
)

CountersCard.propTypes = {
  license: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url:  PropTypes.string
  }).isRequired,
  primaryLanguage: PropTypes.shape({
    name:  PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = (state) => {
  const name = state.details.repositoryName
  const repository = state.repositories.get(name)
  return {
    license:         repository.license,
    primaryLanguage: repository.primaryLanguage
  }
}

export default connect(
  mapStateToProps
)(CountersCard)
