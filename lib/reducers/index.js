import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { persistReducer } from 'redux-persist'
import user from './user'
import product from './product'
import userProducts from './userProducts'
import cart from './cart'
import payment from './payment'
import wallet from './wallet'
import transaction from './transaction'
import productImages from './productimages'

export default combineReducers({
	form,
	user,
	product,
	userProducts,
	cart,
	payment,
	wallet,
	transaction,
	productImages
})
