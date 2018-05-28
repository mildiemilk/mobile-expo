import {
	REGISTER_PRODUCT_PENDING,
	REGISTER_PRODUCT_SUCCESS,
	SET_PRODUCT_IMAGE
} from '../actions/product'

const initialState = {
	pending: false,
	productImagePending: {}
}

export default (state = initialState, action) => {
	const { type, payload } = action 
	switch(type){
		case REGISTER_PRODUCT_PENDING: return { ...state, pending: true }
		case REGISTER_PRODUCT_SUCCESS: return { ...state, pending: false}
		case SET_PRODUCT_IMAGE.PENDING: return {...state, productImagePending:{[payload]:true}}
		case SET_PRODUCT_IMAGE.SUCCESS: return {...state, productImagePending:[]}
		default: return initialState
	}
}
