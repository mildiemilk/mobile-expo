import firebase from 'firebase'
import moment from 'moment'

const now = () => moment(new Date()).format("YYYY/MM/DD hh:mm:ss A");

export const addMessage = (msg) => ({
  type: 'ADD_MESSAGE',
	...msg
});

export const loadMessageAction = (arrMsg) => { 
	console.log('arrMsg-->>', arrMsg)
	return {
	type: 'LOAD_MESSAGE',
	payload: arrMsg
}};

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

export const startFetchingMessages = () => ({
  type: 'START_FETCHING_MESSAGES'
});

export const receivedMessages = () => ({
  type: 'RECEIVED_MESSAGES',
  receivedAt: Date.now()
});

export const fetchMessages = (userUid) => {
    console.log('fetch userUid', userUid)
  return function (dispatch) {
      dispatch(startFetchingMessages());
      console.log('fetch ID', userUid)
      firebase.database()
              .ref('chatrooms')
              .orderByChild('sellerId')
              .equalTo(userUid)
              .on('value', (snapshot) => {
                  // gets around Redux panicking about actions in reducers
                  setTimeout(() => {
                      const messages = snapshot.val() || [];
                      console.log('fetch messages-->', messages)
                      dispatch(receiveMessages(messages))
                  }, 0);
                  console.log('fetch eeeemessages-->', messages)
              });
  }
}

export const receiveMessages = (messages) => {
  return function (dispatch) {
		Object.values(messages).forEach(msg => dispatch(addMessage(msg)));

		dispatch(receivedMessages());
  }
}

export const updateMessagesHeight = (event) => {
  const layout = event.nativeEvent.layout;
  return {
		type: 'UPDATE_MESSAGES_HEIGHT',
		height: layout.height
  }
}

export const updateChatroom = async (currentChatroom, message) => {
	const db = await loadFirebase('database')
	const newChatText = {
		sender:'seller',
		message,
		timestamp:now()
	}
	const nextChatroom = {
		...currentChatroom,
		chats: [
			...currentChatroom.chats,
			newChatText
		]
	}
	let updates = {}
	updates[`/chatrooms/${currentChatroom.chatId}`] = nextChatroom
	db.ref().update(updates)
}

export const loadAndUpdateChatroom = async ( chatroomKey, message ) => {
	const db = await loadFirebase('database')
	var chatroom = db.ref('chatrooms/' + chatroomKey)
	chatroom.on('value', snapshot => updateChatroom(chatroomKey, message, snapshot.val()))
}

export const loadMessage = (user) => async(dispatch) => {
	const currentChatroom = await firebase.database()
		.ref("chatrooms")
		.orderByChild("sellerId")
		.equalTo(user.userUid)
		.once('value')
		.then(snapshot =>  snapshot.val())
	console.log('FetchCurrent', currentChatroom, Object.values(currentChatroom)[0].chats)
	// Object.values(currentChatroom)[0].chats.map(element => dispatch(addMessage(element)))
	dispatch(loadMessageAction(Object.values(currentChatroom)[0].chats))
}