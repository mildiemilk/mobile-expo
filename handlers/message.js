
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
	await Promise.all(Object.values(currentChatroom).map( async value => {
		let data = value
		const detailProduct = await searchProduct(value.productId)
 		data = {...data, detailProduct}
		result.push(data)
	})
	)
	// promise = promise.then(result => results.push(result))
	console.log('result AA ---->', result)
	Promise.all(result).then(res => dispatch(loadMessageAction(res)))
}

export const sendMessage = (message, user, chatId) => async (dispatch) =>{
	console.log('send', message, chatId)

	const currentChatroom = await firebase.database()
	.ref("chatrooms")
	.orderByChild("sellerId")
	.equalTo(user.userUid)
	.once('value')
	.then(snapshot =>  snapshot.val())
  console.log('current-->', currentChatroom, Object.values(currentChatroom))
	let data = Object.values(currentChatroom).filter(value => value.chatId === chatId)
	console.log('data Room', data)
	const newChatText = {
		sender:'seller',
		message,
		author: {
			name: user.name,
			avatar: user.avatar
		},
		timestamp:now()
	}
	console.log('newChatText--->', data,Object.values(data)[0], newChatText)
	const nextChatroom = {
		...Object.values(data)[0],
		chats: [...Object.values(data)[0].chats, newChatText]
	}
	console.log('newChatText eiie', nextChatroom, chatId)
	let updates = {}

	updates[`/chatrooms/${chatId}`] = JSON.parse( JSON.stringify(nextChatroom ) )
	firebase.database().ref().update(updates)

	dispatch(addMessage(nextChatroom));
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