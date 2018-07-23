
import moment from 'moment'
import firebase from 'firebase'
import _ from 'lodash'
import { loadMessageAction, addMessage } from '../actions/message'

const now = () => moment(new Date()).format("YYYY/MM/DD hh:mm:ss A");

const searchChatroom = async (uid, sender) => {
	const result = await firebase.database()
		.ref("chatrooms")
		.orderByChild(sender)
		.equalTo(uid)
		.once('value')
		.then(snapshot =>  snapshot.val())
	return result
}
export const loadMessage = (user) => async(dispatch) => {
	const chatroomSellerId = await searchChatroom(user.userUid,"sellerId")
	const chatroomSponsorId = await searchChatroom(user.userUid,"sponsorId")
	const currentChatroom = {...chatroomSellerId, ...chatroomSponsorId}
	let result = []
	await Promise.all(Object.values(currentChatroom).map( async value => {
		let data = value
		const detailProduct = await searchProduct(value.productId)
		data = {...data, detailProduct}
		result.push(data)
	})
	)
	dispatch(loadMessageAction(result))
}

export const sendMessage = (message, user, chatId) => async (dispatch) =>{
	const chatroomSellerId = await searchChatroom(user.userUid,"sellerId")
	const chatroomSponsorId = await searchChatroom(user.userUid,"sponsorId")
	let dataSellerId = Object.values(chatroomSellerId).filter(value => value.chatId === chatId)
	let dataSponsorId = Object.values(chatroomSponsorId).filter(value => value.chatId === chatId)
	let sender = {}, data
	if(dataSellerId.length > 0) {
		sender = { sender: 'seller'}
		data = dataSellerId
	} else if (dataSponsorId.length > 0) {
		sender = { sender: 'sponsorId'}
		data = dataSponsorId
	}
	const newChatText = {
		...sender,
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
	let index = _.findIndex(Object.values(data), {chatId})
	const detailProduct = await searchProduct(Object.values(data)[index].productId)
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
