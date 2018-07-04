import { routerMiddleware } from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'

export const history = createHashHistory()
export const historyMiddleware = routerMiddleware(history)
