import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'
import product from './product'
import userProducts from './userProducts'

export default combineReducers({
	form: formReducer,
	user,
	product,
	userProducts
})