import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import user from './user'
import product from './product'
import userProducts from './userProducts'
import cart from './cart'
import payment from './payment'
import wallet from './wallet'
import transaction from './transaction'
import productImages from './productimages'

export default combineReducers({
	form: formReducer,
	user,
	product,
	userProducts,
	cart,
	payment,
	wallet,
	transaction,
	productImages
})
