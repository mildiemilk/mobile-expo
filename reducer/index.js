import chat from '../lib/reducers/chat'
import user from '../lib/reducers/user'
import { combineReducers } from 'redux'

export default combineReducers({user,chat})
