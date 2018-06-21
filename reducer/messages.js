const message = (state, action) => {
	console.log('actionMessage', action)
	return {
			id: action.id,
			message: action.message,
			timestamp: action.timestamp,
			author: action.author||{
				name: 'unKnown',
				avatar: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png',
		},
	}
}



const messages = (state = [], action) => {
	console.log('action--->', action)
  switch (action.type) {
		case 'ADD_MESSAGE':
				return {
				...state,
				lists: [...state.lists, message(undefined, action)]
				}
		case 'LOAD_MESSAGE':
		console.log('eieei', action)
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