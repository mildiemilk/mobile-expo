import { SET_USER_PRODUCTS } from '../actions/product'

const initialState = {}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
			case SET_USER_PRODUCTS.SUCCESS: 
				return {
					... payload
				}
			default: 
				return state 
		}
}
