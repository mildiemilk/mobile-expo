import asyncaction from './asyncaction'

export const ADD_PRODUCT_DESCRIPTION = 'ADD_PRODUCT_DESCRIPTION'
export const addProductDescription = (tag) => ({
	type: ADD_PRODUCT_DESCRIPTION,
	payload: tag
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

export const SET_SPONSER_PRODUCTS = 'SET_SPONSER_PRODUCTS'
export const setSponsorProducts = (props) => ({	
	type: SET_SPONSER_PRODUCTS,
	payload: props
})

export const setUserProductByIDSuccess = () => ({type: SET_USER_PRODUCTS.SUCCESS})

export const SET_PRODUCT_BY_ID = asyncaction('SET_PRODUCT_BY_ID')
export const setProductByID = (product) => ({
	type: SET_PRODUCT_BY_ID.SUCCESS,
	payload: product
})

export const setProductByIDPending = () => ({type: SET_PRODUCT_BY_ID.PENDING})
export const setProductByIDError = () => ({type: SET_PRODUCT_BY_ID.ERROR})
export const setProductSuccess = product => ({type: SET_PRODUCT_BY_ID.SUCCESS, payload:product})

export const SET_PRODUCT_IMAGE = asyncaction('SET_PRODUCT_IMAGE')
export const setProductImageByKeyPending = key => ({type: SET_PRODUCT_IMAGE.PENDING, payload: key})
export const setProductImageByKey = (image, key) => ({type: SET_PRODUCT_IMAGE.SUCCESS, payload:{image, key}})

export const REMOVE_PRODUCT_IMAGE = 'REMOVE_PRODUCT_IMAGE'
export const removeProductImage = imageOrder => ({type: REMOVE_PRODUCT_IMAGE, payload:imageOrder})

export const CLEAR_PRODUCT_IMAGES = 'CLEAR_PRODUCT_IMAGES'
export const clearProductImages = () => ({type: CLEAR_PRODUCT_IMAGES})
