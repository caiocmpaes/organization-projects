import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List } from 'immutable'
import { ListGroup } from 'react-bootstrap'
import SidebarItem from './SidebarItem'

const Sidebar = ({ repositories }) => (
  <ListGroup>
    {repositories.map(repository => (
      <SidebarItem
        key={repository.name}
        name={repository.name}
        watchers={repository.watchersCount}
      />
    ))}
  </ListGroup>
)

Sidebar.propTypes = {
  repositories: PropTypes.instanceOf(List).isRequired
}

const mapStateToProps = state => ({
  repositories: state.repositories.toList().sortBy(repository => repository.watchersCount).reverse()
})

export default connect(
  mapStateToProps
)(Sidebar)
