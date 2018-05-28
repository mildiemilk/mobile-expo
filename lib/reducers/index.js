import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import user from './user'
import product from './product'
import userProducts from './userProducts'
import profile from './profile'
import payment from './payment'
import transaction from './transaction'
import admin from './admin'
import transactions from './transactions'
import productImages from './productimages'
import disputes from './disputes'
import sponsorProducts from './sponsorProducts'
import member from './member'
import main from './main'
import memberships from './memberships'

export default combineReducers({
	form,
	user,
	product,
	userProducts,
	profile,
	payment,
	transaction,
	transactions,
	productImages,
	disputes,
	sponsorProducts,
	admin,
	member,
	main,
	memberships
})
