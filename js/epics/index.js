import { combineEpics } from 'redux-observable'
import mainPage from './mainPage'

export default combineEpics(
  mainPage
)
