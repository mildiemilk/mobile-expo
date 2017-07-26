import {addQuantity as addQuantityAction, minusQuantity as minusQuantityAction} from '../actions/cart'

export const addQuantity = item => dispatch => {
	dispatch(addQuantityAction(item))
}

export const minusQuantity = item => minusQuantityAction(item)