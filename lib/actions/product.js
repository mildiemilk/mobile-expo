import asyncaction from './asyncaction'

export const ADD_PRODUCT_DESCRIPTION = 'ADD_PRODUCT_DESCRIPTION'
export const addProductDescription = (tag) => ({
	type: ADD_PRODUCT_DESCRIPTION
})

export const REGISTER_PRODUCT_PENDING = 'REGISTER_PRODUCT_PENDING'
export const registerProductPending = () => ({
	type: REGISTER_PRODUCT_PENDING
})

export const REGISTER_PRODUCT_SUCCESS = 'REGISTER_PRODUCT_SUCCESS'
export const registerProductSuccess = () => ({
	type: REGISTER_PRODUCT_SUCCESS
})

export const REGISTER_PRODUCT_FAILED = 'REGISTER_PRODUCT_FAILED'
export const registerProductFailed = () => ({
	type: REGISTER_PRODUCT_FAILED
})

export const SET_USER_PRODUCTS = asyncaction('SET_USER_PRODUCTS')
export const setUserProducts = (products) => ({	
	type: SET_USER_PRODUCTS.SUCCESS,
	payload:  products
})
export const setUserProductsPending = (uid) => ({type: SET_USER_PRODUCTS.PENDING, payload: uid})
export const setUserProductByIDSuccess = () => ({type: SET_USER_PRODUCTS.SUCCESS})

export const SET_PRODUCT_BY_ID = asyncaction('SET_PRODUCT_BY_ID')
export const setProductByID = (product) => ({
	type: SET_PRODUCT_BY_ID.SUCCESS,
	payload: product
})

export const setProductByIDPending = () => ({type: SET_PRODUCT_BY_ID.PENDING})
export const setProductByIDError = () => ({type: SET_PRODUCT_BY_ID.ERROR})
export const setProductByIDSuccess = product => ({type: SET_PRODUCT_BY_ID.SUCCESS, payload:product})

export const SET_PRODUCT_IMAGE = asyncaction('SET_PRODUCT_IMAGE')
export const setProductImageSuccess = imageUrl => ({type: SET_PRODUCT_IMAGE.SUCCESS, payload: imageUrl})
