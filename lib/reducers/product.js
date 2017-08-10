import { 
	ADD_PRODUCT_DESCRIPTION,
	SET_PRODUCT_BY_ID
} from '../actions/product'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {
	productDescription: [],
	brandName: '',
	comissionCash: '',
	comissionPercent: '',
	price: '',
	productName: '',
	userEmail: '',
	userUid: ''
}

export default (state = initialState, action) => {
	const { type, payload } = action
	switch(type){
		case ADD_PRODUCT_DESCRIPTION: 
		return {
			...state,
			productDescription: [
				...state.productDescription,
				{
					tag: "p",
					value: ""
				}
			]
		}
		case SET_PRODUCT_BY_ID.SUCCESS:
		return {
			...payload
		}
		case REHYDRATE:
			var incoming = action.payload.myReducer
			if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
			return state
		default: 
		return state
	}
}
