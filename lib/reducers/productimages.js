import {REHYDRATE} from 'redux-persist/constants'
import {SET_PRODUCT_IMAGE} from '../actions/product'


export default (state = [], action) => {
	const { type, payload } = action
	switch(type){
		case SET_PRODUCT_IMAGE.SUCCESS:
		return [
			...state,
			payload
		]
		case REHYDRATE:
		var incoming = action.payload.productimage
		if (incoming) return {...state, ...incoming}
		return state
		default:
		return state 
	}
}
