import loadFirebase from '../database'
import store from '../store'
import Router from 'next/router'
import { 
	registerProductSuccess, 
	registerProductPending, 
	setUserProductsSuccess,
	setProductByID,
	setProductByIDPending,
	setProductByIDSuccess,
	setProductImageSuccess,
	setProductImage as setProductImageByKey
} from '../actions/product'
import { SET_USER_PRODUCTS } from '../actions/product'
import { setProductOwner } from '../actions/user'

export const registerProduct = async (productInfo) => {
	store.dispatch(registerProductPending())
	const database = await loadFirebase('database')
	var key = database.ref().child('products').push().key
	var updates = {}

	updates['/products/'+ key] = productInfo
	store.dispatch(registerProductSuccess())
	Router.push('/')
	return database.ref().update(updates)
}

export const getUserProducts = async (userUid) => {
	const database = await loadFirebase('database')
	let product = {}
	store.dispatch({type: SET_USER_PRODUCTS.PENDING})
	await	database
			.ref("products")
			.orderByChild("userUid")
			.equalTo(userUid)
			.on("value", productVal => store.dispatch(setUserProductsSuccess(productVal.val())))
}

export const getProductFromID = async (id) => {
	const database = await loadFirebase('database')
	await store.dispatch(setProductByIDPending())
	await database
		.ref("products/"+ id)
		.once('value')
		.then(snapshot => {
			store.dispatch(setProductByID(snapshot.val()))
			store.dispatch(setProductOwner(snapshot.val().userUid))
		})
}

export const setProductImage = async (key, image) => {
	const storage = await loadFirebase('storage')
	await storage.ref('images').child(`${Date.now()}.jpg`).put(image[0]).then( snapshot => store.dispatch(setProductImageByKey(snapshot.downloadURL, key)))
}
