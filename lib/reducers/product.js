import { 
	ADD_PRODUCT_DESCRIPTION,
	SET_PRODUCT_BY_ID
} from '../actions/product'

const initialState = {
	productDescription: [],
	brandName: '',
	comissionCash: '0',
	comissionPercent: '0',
	price: '0',
	productName: '',
	userEmail: '',
	userUid: '',
	active: true
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
					tag: payload,
					value: ""
				}
			]
		}
		case SET_PRODUCT_BY_ID.SUCCESS:
		return {
			...payload
		}
		default: 
		return state
	}
}
