import {
	REGISTER_PRODUCT_PENDING,
	REGISTER_PRODUCT_SUCCESS
} from '../actions/product'

const initialState = {
	pending: false
}

export default (state = initialState, action) => {
	const { type, payload } = action 
	switch(type){
		case REGISTER_PRODUCT_PENDING: return { ...state, pending: true }
		case REGISTER_PRODUCT_SUCCESS: return { ...state, pending: false}
		default: return initialState
	}
}
