import firebase from 'firebase'
import moment from 'moment'

const now = () => moment(new Date()).format("YYYY/MM/DD hh:mm:ss A");

export const fetchMessage = (msg) => {
	return {
  type: 'FETCH_MESSAGE',
	payload : msg
}};

export const loadMessageAction = (arrMsg) => { 
	return {
	type: 'LOAD_MESSAGE',
	payload: arrMsg
}};


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