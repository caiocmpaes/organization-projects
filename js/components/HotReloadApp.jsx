import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('bodycontent')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./App', () => { renderApp(App) })
}
