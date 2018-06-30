
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
	let result = []
	await Promise.all(Object.values(currentChatroom).map( async value => {
		let data = value
		const detailProduct = await searchProduct(value.productId)
		 data = {...data, detailProduct}
		result.push(data)
	})
	)
	Promise.all(result).then(res => dispatch(loadMessageAction(res)))
}

export const sendMessage = (message, user, chatId) => async (dispatch) =>{

	const currentChatroom = await firebase.database()
	.ref("chatrooms")
	.orderByChild("sellerId")
	.equalTo(user.userUid)
	.once('value')
	.then(snapshot =>  snapshot.val())
	let data = Object.values(currentChatroom).filter(value => value.chatId === chatId)
	const detailProduct = await searchProduct(Object.values(data)[0].productId)
	const newChatText = {
		sender:'seller',
		message,
		author: {
			name: user.name,
			avatar: user.avatar
		},
		timestamp:now()
	}
	const nextChatroom = {
		...Object.values(data)[0],
		chats: [...Object.values(data)[0].chats, newChatText]
	}
	let updates = {}

	updates[`/chatrooms/${chatId}`] = JSON.parse( JSON.stringify(nextChatroom ) )
	firebase.database().ref().update(updates)
	const updateMessage = {
		...nextChatroom,
		detailProduct,
	}
	await dispatch(addMessage(updateMessage));
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