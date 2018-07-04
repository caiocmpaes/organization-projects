import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { historyMiddleware } from './configureHistory'
import rootReducer from '../reducers'
import rootEpic from '../epics'

const epicMiddleware = createEpicMiddleware()

const middlewares = applyMiddleware(epicMiddleware, historyMiddleware)

export const store = createStore(rootReducer, undefined, middlewares)

epicMiddleware.run(rootEpic)
