import { 
	ADD_PRODUCT_DESCRIPTION,
	SET_PRODUCT_BY_ID
} from '../actions/product'

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
		case SET_PRODUCT_BY_ID:
		return {
			...state,
			...payload
		}
		default: 
		return state
	}
}