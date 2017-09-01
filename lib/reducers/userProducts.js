import { SET_USER_PRODUCTS } from '../actions/product'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
			case SET_USER_PRODUCTS.SUCCESS: 
				return {
					... payload
				}
			case REHYDRATE:
				var incoming = action.payload.userProducts
				if (incoming) return {...state, ...incoming}
				return state
			default: 
				return state 
		}
}
