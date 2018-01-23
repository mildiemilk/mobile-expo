import {
    GET_ALL_DISPUTES
} from '../actions/disputes'

const disputes = []

export default(state = disputes, action) => {
	const {type, payload} = action
	switch (type) {
		case GET_ALL_DISPUTES:
			return ({
				...state,
				...payload
			})
		default:
			return state
		}
}

