import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import '../../css/main.css'

const DefaultLayout = ({ children }) => (
  <IntlProvider locale="en">
    <div id="react-app">
      {children}
    </div>
  </IntlProvider>
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default withRouter(DefaultLayout)
