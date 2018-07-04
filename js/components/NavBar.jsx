import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Label, Navbar, Nav, NavItem } from 'react-bootstrap'
import { sendLogoffRequest } from '../actions'

const NavBar = ({ onClickLogoff, showNavBarLinks }) => (
  <Navbar fixedTop className="dark-nav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">
          <span>Compre Desconte <Label>Beta</Label></span>
        </a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav navbar>
      <NavItem>Campina Grande</NavItem>
    </Nav>
    {showNavBarLinks ?
      <Nav navbar pullRight>
        <NavItem onClick={onClickLogoff}>Sair</NavItem>
      </Nav>
      :
      null
    }
  </Navbar>
)

NavBar.propTypes = {
  onClickLogoff:   PropTypes.func.isRequired,
  showNavBarLinks: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  showNavBarLinks: state.login === undefined
})

const mapDispatchToProps = dispatch => ({
  onClickLogoff: () => {
    dispatch(sendLogoffRequest())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
