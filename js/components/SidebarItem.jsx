import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ListGroupItem, Badge } from 'react-bootstrap'
import { showRepositoryDetails } from '../actions'

const SidebarItem = ({ name, watchers, onClick }) => (
  <ListGroupItem onClick={onClick}>
    {name}
    <Badge>
      {watchers}
    </Badge>
  </ListGroupItem>
)

SidebarItem.propTypes = {
  name:     PropTypes.string.isRequired,
  watchers: PropTypes.number.isRequired,
  onClick:  PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  organization: state.organization.login
})

const mergeProps = ({ organization }, { dispatch }, { name, watchers }) => ({
  name,
  watchers,
  onClick: () => {
    dispatch(showRepositoryDetails(organization, name))
  }
})

export default connect(
  mapStateToProps,
  null,
  mergeProps
)(SidebarItem)
