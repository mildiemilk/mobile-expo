import _ from 'lodash'

// const message = (state, data) => {
// 	console.log('actionMessage', data)
// 	return {
// 			...data,
// 			chats: [...data.chats,
// 				id: data.id,
// 			message: data.message,
// 			timestamp: data.timestamp,
// 			author: data.author||{
// 				name: 'unKnown',
// 				avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
// 		}],
// 	}
// }



const messages = (state = [], action) => {
  switch (action.type) {
		case 'ADD_MESSAGE':
			let index = _.findIndex(state.lists, {chatId: action.payload.chatId})
			state.lists.splice(index, 1, action.payload);
		return {
			...state,
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