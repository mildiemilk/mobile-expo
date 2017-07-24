export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const addItemToCart = (item) => ({
	type: ADD_ITEM_TO_CART,
	payload: item
})

export const ADD_QUANTITY = 'ADD_QUANTITY'
export const addQuantity = (item) => ({
	type: ADD_QUANTITY,
	payload: item  
})

export const MINUS_QUANTITY = 'MINUS_QUANTITY'
export const minusQuantity = (item) => ({
	type: MINUS_QUANTITY,
	payload: item
})

export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST'
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE'