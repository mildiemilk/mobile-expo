
import moment from 'moment'
import firebase from 'firebase'

import { loadMessageAction, addMessage } from '../actions/message'
import { setProduct } from '../actions/product'


const now = () => moment(new Date()).format("YYYY/MM/DD hh:mm:ss A");

export const loadMessage = (user) => async(dispatch) => {
	const currentChatroom = await firebase.database()
		.ref("chatrooms")
		.orderByChild("sellerId")
		.equalTo(user.userUid)
		.once('value')
		.then(snapshot =>  snapshot.val())
	console.log('FetchCurrent', currentChatroom, Object.values(currentChatroom))
	// const A = await searchProduct('-LD5py9G2yMMRUexJxLn')
	let result = []
	await Object.values(currentChatroom).map( async value => {
		let data = value
		const detailProduct = await searchProduct(value.productId)
		console.log('detailProduct', detailProduct)
		data = {...data, detailProduct}
		console.log('data', result, data)
		result.push(data)
		console.log('result--->', result, result.length)
	}
	)
	// promise = promise.then(result => results.push(result))
	console.log('result AA', result)
	Promise.all(result).then(res => dispatch(loadMessageAction(res)))
}

export const sendMessage = (message, user) => async (dispatch) =>{
	console.log('send', message, user)

	const currentChatroom = await firebase.database()
	.ref("chatrooms")
	.orderByChild("sellerId")
	.equalTo(user.userUid)
	.once('value')
	.then(snapshot =>  snapshot.val())
  console.log('current', currentChatroom, Object.values(currentChatroom)[0].chats)

	const newChatText = {
		sender:'seller',
		message,
		timestamp:now()
	}
	console.log('newChatText--->', Object.values(currentChatroom)[0], newChatText)
	const nextChatroom = {
		...Object.values(currentChatroom)[0],
		chats: [...Object.values(currentChatroom)[0].chats, newChatText]
	}
	console.log('newChatText eiie', nextChatroom)
	let updates = {}

	updates[`/chatrooms/${Object.values(currentChatroom)[0].chatId}`] = nextChatroom
	firebase.database().ref().update(updates)

	let msg = {
		...newChatText,
		author: {
			name: user.name,
			avatar: user.avatar
		}
	};
	dispatch(addMessage(msg));
};

export const updateMessagesHeight = (event) => {
  const layout = event.nativeEvent.layout;
  return {
		type: 'UPDATE_MESSAGES_HEIGHT',
		height: layout.height
  }
}

export const searchProduct = async productKey => {

	const product = await firebase.database()
	.ref("products/"+ productKey)
	.once('value')
	.then(snapshot =>  snapshot.val())
	return product
	
}