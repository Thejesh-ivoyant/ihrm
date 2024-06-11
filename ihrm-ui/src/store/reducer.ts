import { combineReducers } from 'redux'
import userSettings from './user-settings'

const RootReducer = combineReducers({
  userSettings,
})

export default RootReducer
