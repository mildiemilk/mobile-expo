import { SET_SPONSER_PRODUCTS } from '../actions/product'

const initialState = {
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
      case SET_SPONSER_PRODUCTS: 
      // const a = products[payload.productId] = payload
      // console.log('payload', a)
				return Object.assign({}, {
          ...state,
          ...payload
				})
			default: 
				return state 
		}
}
