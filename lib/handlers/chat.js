import loadFirebase from '../database'
import moment from 'moment'
import store from '../store'
import { setNewChatroomSuccess, updateChatroomMessageSuccess, setChats } from '../actions/chat';

const now = () => moment(new Date()).format("YYYY/MM/DD hh:mm:ss A");

export const newChatroom = async ( productId, sellerId, sponsorId, initialMessage) => {
    const db = await loadFirebase('database')
    const key =  await db.ref().child('chatrooms').push().key
    let updates = {}

    updates[`/chatrooms/${key}`] = {
        chatId:key,
        sellerId, 
        sponsorId, 
        productId, 
        chats:[
        {
            sender:'buyer',
            message:initialMessage,
            timestamp: now()
        }]
    }
    await db.ref().update(updates)
    store.dispatch(setNewChatroomSuccess(updates[`/chatrooms/${key}`]))
}

export const loadAndUpdateChatroom = async ( chatroomKey, message ) => {
    const db = await loadFirebase('database')
    var chatroom = db.ref('chatrooms/' + chatroomKey)
    chatroom.on('value', snapshot=>updateChatroom(chatroomKey, message, snapshot.val()))
}

export const updateChatroom = async (currentChatroom, message) => {
    const db = await loadFirebase('database')
    const newChatText = {
        sender:'buyer',
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
    store.dispatch(updateChatroomMessageSuccess(newChatText))
}

export const onChangeChatroom = async (key) => {
    const db = await loadFirebase('database')    
    console.log(' i am here ', key)
    key&&
    await db
    .ref('chatrooms/'+key+'/chats')
    .on("value", chatroom => store.dispatch(setChats(chatroom && chatroom.val())))
}