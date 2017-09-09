import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'
import product from './product'
import userProducts from './userProducts'
import sharedUser from './sharedUser'
import cart from './cart'
import payment from './payment'
import wallet from './wallet'
import transaction from './transaction'

export default combineReducers({
	form: formReducer,
	user,
	product,
	userProducts,
	sharedUser,
	cart,
	payment,
	wallet,
	transaction
})
