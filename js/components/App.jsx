import React from 'react'
import { Switch, Route } from 'react-router'

import ReduxApp      from './ReduxApp'
import DefaultLayout from './DefaultLayout'
import MainPage from './MainPage'

const App = () => (
  <ReduxApp>
    <DefaultLayout>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </DefaultLayout>
  </ReduxApp>
)


export default App
