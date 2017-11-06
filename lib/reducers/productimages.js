import {REHYDRATE} from 'redux-persist/constants'
import {SET_PRODUCT_IMAGE} from '../actions/product'


export default (state = [], action) => {
	const { type, payload } = action
	switch(type){
		case SET_PRODUCT_IMAGE.SUCCESS:
		return state.slice(0,payload.key)
			.concat(payload.image)
		return state
		default:
		return state 
	}
}
