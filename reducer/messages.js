import _ from 'lodash'

const messages = (state = [], action) => {
  switch (action.type) {
		case 'ADD_MESSAGE':
			let index = _.findIndex(state.lists, {chatId: action.payload.chatId})
			state.lists.splice(index, 1, action.payload)
		return {
			...state,
			lists: [...state.lists],
		}
		case 'LOAD_MESSAGE':
		return {
				...state,
				lists: action.payload,
			}
		case 'SEND_MESSAGE':
			return [
					...state,
					message(undefined, action)
			]
		default:
			return state
  }
};

export default messages;