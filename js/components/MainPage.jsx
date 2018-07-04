import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import DetailsView from './DetailsView'
import { fetchOrganizationData } from '../actions'

class MainPage extends Component {
  componentDidMount() {
    const { onComponentDidMount } = this.props
    onComponentDidMount()
  }

  render() {
    return (
      <Grid fluid id="main-page">
        <Row>
          <Col xs={3}>
            <Sidebar />
          </Col>
          <Col xs={9}>
            <DetailsView />
          </Col>
        </Row>
      </Grid>
    )
  }
}

MainPage.propTypes = {
  onComponentDidMount: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  onComponentDidMount: () => {
    dispatch(fetchOrganizationData())
  }
})

export default connect(
  null,
  mapDispatchToProps
)(MainPage)
