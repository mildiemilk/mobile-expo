import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { persistReducer } from 'redux-persist'
import user from './user'
import product from './product'
import userProducts from './userProducts'
import profile from './profile'
import cart from './cart'
import payment from './payment'
import transaction from './transaction'
import admin from './admin'
import transactions from './transactions'
import productImages from './productimages'
import disputes from './disputes'
import sponsorProducts from './sponsorProducts'
import member from './member'

export default combineReducers({
	form,
	user,
	product,
	userProducts,
	profile,
	cart,
	payment,
	transaction,
	transactions,
	productImages,
	disputes,
	sponsorProducts,
	admin,
	member
})
