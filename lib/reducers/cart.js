import {
	ADD_ITEM_TO_CART,
	ADD_QUANTITY,
	MINUS_QUANTITY,
	CHECKOUT_REQUEST,
	CHECKOUT_FAILURE
} from '../actions/cart'
import {REHYDRATE} from 'redux-persist/constants'

const initialState = {
	addedIds: [],
	quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
	const { type, payload } = action
	switch (type) {
		case ADD_QUANTITY:
			if (state.indexOf(payload) !== -1) {
				return state
			}
			return [ ...state, payload ]
		default:
			return state
	}
}

const quantityById = (state = initialState.quantityById, action) => {
	const { type, payload } = action
	switch (type) {
		case MINUS_QUANTITY:
			return {
				...state,
				[payload]: state[payload] <= 0 ? 0 : (state[payload] || 0) - 1 
			}		
		case ADD_QUANTITY:
			return {
				...state,
				[payload]: (state[payload] || 0) + 1 
			}
		default:
			return state
	}
}

const getQuantity = (state, productId) =>
	state.quantityById[productId] || 0

const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
	switch (action.type) {
		case CHECKOUT_REQUEST:
			return initialState
		case CHECKOUT_FAILURE:
			return action.cart
		case REHYDRATE:
			var incoming = action.payload.cart
			if (incoming) return {...state, ...incoming}
			return state
		default:
			return {
				addedIds: addedIds(state.addedIds, action),
				quantityById: quantityById(state.quantityById, action)
			}
	}
}

export default cart

