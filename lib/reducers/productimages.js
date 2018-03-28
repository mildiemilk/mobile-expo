import {SET_PRODUCT_IMAGE, SET_PRODUCT_BY_ID, REMOVE_PRODUCT_IMAGE, CLEAR_PRODUCT_IMAGES} from '../actions/product'


export default (state = [], action) => {
	const { type, payload } = action
	switch(type){
		case SET_PRODUCT_IMAGE.SUCCESS:
		return state.slice(0,payload.key)
			.concat(payload.image)
		case SET_PRODUCT_BY_ID.SUCCESS:
		return payload.productImages
		case REMOVE_PRODUCT_IMAGE: 
		return state.slice(0,payload).concat(state.slice(payload+1, state.length))
		case CLEAR_PRODUCT_IMAGES: 
		return []
		default:
		return state 
	}
}
