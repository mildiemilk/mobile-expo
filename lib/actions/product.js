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

export const SET_USER_PRODUCTS = 'SET_USER_PRODUCTS'
export const setUserProducts = (products) => ({	
	type: SET_USER_PRODUCTS,
	payload: {
		products: products
	}}
)

export const SET_USER_PRODUCTS_PENDING = 'SET_USER_PRODUCTS_PENDING'
export const setUserProductsPending = () => ({type: SET_USER_PRODUCTS_PENDING})

export const SET_USER_PRODUCTS_SUCCESS = 'SET_USER_PRODUCTS_SUCCESS'
export const setUserProductsSuccess = () => ({type: SET_USER_PRODUCTS_SUCCESS})

export const SET_PRODUCT_BY_ID = 'SET_PRODUCT_BY_ID'
export const setProductByID = (product) => ({
	type: SET_PRODUCT_BY_ID,
	payload: product
})

export const SET_PRODUCT_BY_ID_PENDING = 'SET_PRODUCT_BY_ID_PENDING '
export const setProductByIDPending = () => ({type: SET_PRODUCT_BY_ID_PENDING})

export const SET_PRODUCT_BY_ID_SUCCESS = 'SET_PRODUCT_BY_ID_SUCCESS'
export const setProductByIDSuccess = () => ({type: SET_PRODUCT_BY_ID_SUCCESS})

export const SET_PRODUCT_BY_ID_ERROR = 'SET_PRODUCT_BY_ID_ERROR'
export const setProductByIDError = () => ({type: SET_PRODUCT_BY_ID_ERROR})