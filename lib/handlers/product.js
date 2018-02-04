import loadFirebase from '../database'
import store from '../store'
import { change } from 'redux-form'
import Router from 'next/router'
import { 
	registerProductSuccess, 
	registerProductPending, 
	setUserProducts,
	setSponsorProducts,
	setProductByID,
	setProductByIDPending,
	setProductByIDSuccess,
	setProductImageSuccess,
	setProductImage as setProductImageByKey
} from '../actions/product'
import { SET_USER_PRODUCTS } from '../actions/product'
import { setProductOwner } from '../actions/user'

const parseIntProduct = productInfo => {
	return {
		...productInfo,
		stock: parseInt(productInfo.stock),
		price: parseInt(productInfo.price),
		comissionCash: parseInt(productInfo.comissionCash),
		comissionPercent: parseInt(productInfo.comissionPercent)
	}
}

export const registerProduct = async (productInfo) => {
	productInfo = parseIntProduct(productInfo)
	store.dispatch(registerProductPending())
	const database = await loadFirebase('database')
	var key = database.ref().child('products').push().key
	var updates = {}

	updates['/products/'+ key] = JSON.parse(JSON.stringify(productInfo))
	store.dispatch(registerProductSuccess())
	Router.push('/')
	return database.ref().update(updates)
}

export const updateProduct = async (key, productInfo) => {
	productInfo = parseIntProduct(productInfo)
	store.dispatch(registerProductPending())
	const database = await loadFirebase('database')
	var updates = {}
	
	updates['/products/'+ key] = JSON.parse(JSON.stringify(productInfo))
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
			.on("value", productVal => store.dispatch(setUserProducts(productVal.val())))
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
	await storage
		.ref('images')
		.child(`${Date.now()}.jpg`)
		.put(image[0])
		.then( snapshot => store.dispatch(setProductImageByKey(snapshot.downloadURL, key)))
}

export const saveProductDescriptionImage = async (image, fields, fieldsIndex) => {
	const storage = await loadFirebase('storage')
	return await storage
		.ref('productInfoImages')
		.child(`${Date.now()}.jpg`)
		.put(image[0])
		.then( snapshot =>  {
			console.log('snapshot', snapshot)
			fields.remove(fieldsIndex)
			fields.insert(
				fieldsIndex,
				{
				type: 'image',
				context: snapshot.downloadURL 
			})
		})
}

export const saveProductDescriptionVideo = async (video, fields, fieldsIndex) => {
	const storage = await loadFirebase('storage')
	return await storage
		.ref('productInfoVideos')
		.child(`${Date.now()}.mp4`)
		.put(video[0])
		.then( snapshot =>  {
			console.log('snapshot', snapshot)
			fields.remove(fieldsIndex)
			fields.insert(
				fieldsIndex,
				{
				type: 'video',
				context: snapshot.downloadURL 
			})
		})
}


export const setProductStock = async ( productId, newStock ) => {
	const database = await loadFirebase('database')
	await database.ref("products/"+productId +'/stock').set(newStock)
	location.reload();
}

export const setProductSponsor = async ( productId, email ) => {
	const database = await loadFirebase('database')
	var key = database.ref().child('sponsors').push().key
	await database.ref(`sponsors/${key}`).set({email, productId})
	await store.dispatch(change('profileDetail', 'sponsorEmail', ''))
}

export const getProductSponsor = async (productId) => {
	const database = await loadFirebase('database')
	const Totalsponsor = await database
		.ref("sponsors")
		.orderByChild("productId")
		.equalTo(productId)
		.once('value')
		.then(snapshot => snapshot.val())
	return Totalsponsor
}

export const getProductFromTransactionByUserUid = async (buyerId, email) => {
	const database = await loadFirebase('database')
	const value = await database
		.ref("transactions")
		.orderByChild("buyerId")
		.equalTo(buyerId)
		.once('value')
		.then(snapshot => snapshot.val())
		const result = Object.values(value).filter(item=> item.email === email)
		return result
}

export const getProductFromSponsor = async (email) => {
	const database = await loadFirebase('database')
	const result = await database
		.ref("sponsors")
		.orderByChild("email")
		.equalTo(email)
		.once('value')
		.then(snapshot => snapshot.val())
		return Object.values(result)
}

export const getProductToSponsorTable = async (buyerId, email) =>{
	const transaction = await getProductFromTransactionByUserUid(buyerId,email)
	const sponsor = await getProductFromSponsor(email)
	const allData = transaction.concat(sponsor)
	const unique = [...new Set(allData.map(item => item.productId))]
	unique.map(element => getProductSponsorFromID(element))
}
export const getProductSponsorFromID = async (id) => {
	const database = await loadFirebase('database')
	await store.dispatch(setProductByIDPending())
	let objResult = {} 
	await database
		.ref("products/"+ id)
		.once('value')
		.then(snapshot => {
		objResult[id] = snapshot.val()
		store.dispatch(setSponsorProducts(objResult))
		})
}

export const setProductActive = async(active, key) => {
	const database = await loadFirebase('database')
	return database.ref(`products/${key}`).update({active})
  }