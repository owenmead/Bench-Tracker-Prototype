import { combineReducers } from 'redux'

import googleAuth from './googleAuth'
import googleSheetsAPI from './googleSheetsAPI'

const rootReducer = combineReducers({
  googleAuth,
  googleSheetsAPI
})

export default rootReducer