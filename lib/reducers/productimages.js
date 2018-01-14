import {SET_PRODUCT_IMAGE, SET_PRODUCT_BY_ID} from '../actions/product'


export default (state = [], action) => {
	const { type, payload } = action
	switch(type){
		case SET_PRODUCT_IMAGE.SUCCESS:
		return state.slice(0,payload.key)
			.concat(payload.image)
		case SET_PRODUCT_BY_ID.SUCCESS:
		return payload.productImages
		default:
		return state 
	}
}
