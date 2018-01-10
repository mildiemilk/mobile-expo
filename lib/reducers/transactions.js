import {GET_ALL_TRANSACTIONS} from '../actions/transaction'

const transactions = []

export default(state = transactions, action) => {
	const {type, payload} = action
	switch (type) {
		case GET_ALL_TRANSACTIONS:
			return ({
				...state,
				...payload
			})
		default:
			return state
		}
}
