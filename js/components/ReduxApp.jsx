import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store } from '../store/configureStore'
import { history } from '../store/configureHistory'

const ReduxApp = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </Provider>
)

ReduxApp.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ReduxApp
