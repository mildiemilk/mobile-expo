import {REHYDRATE} from 'redux-persist/constants'
import {SET_PRODUCT_IMAGE, SET_PRODUCT_SUB_IMAGE} from '../actions/product'


export default (state = [], action) => {
	const { type, payload } = action
	switch(type){
		case SET_PRODUCT_IMAGE.SUCCESS:
		return [
			...state,
			payload
		]
		case SET_PRODUCT_SUB_IMAGE.SUCCESS:
		console.log('state',state.slice(0,payload.key)
		.concat(payload.image)
		.concat(state.slice(payload.key+1,6)))
		return state.slice(0,payload.key)
			.concat(payload.image)
			.concat(state.slice(payload.key+1,6))
		case REHYDRATE:
		var incoming = action.payload.productimage
		if (incoming) return {...state, ...incoming}
		return state
		default:
		return state 
	}
}
