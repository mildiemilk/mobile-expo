import {
		GET_ALL_DISPUTES,
		UPDATE_STATUS,
		UPLOAD_IMAGE
} from '../actions/disputes'

const disputes = {}

export default(state = disputes, action) => {
	const {type, payload} = action
	console.log('reducer', payload)
	switch (type) {
		case GET_ALL_DISPUTES:
			return ({
				...state,
				...payload
			})
		case UPDATE_STATUS:
			return ({
				...state,
				[payload]:{
					...state[payload],
					status:'send',
				}
			})
		case UPLOAD_IMAGE:
			return ({
				...state,
				[payload.index]:{
					...state[payload.index],
					disputeImage: payload.image,
				}
			})
		default:
			return state
		}
}

