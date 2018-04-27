import asyncaction from './asyncaction'

export const NEW_CHATROOM = asyncaction('NEW_CHATROOM')
export const setNewChatroomPending = () =>{ type: NEW_CHATROOM.PENDING}
export const setNewChatroomSuccess = (newChatroom) => ({ type: NEW_CHATROOM.SUCCESS, payload:newChatroom})

export const UPDATE_CHATROOM_MESSAGE = asyncaction('UPDATE_CHAT_ROOM_MESSAGE')
export const updateChatroomMessagePending = () => ({type: UPDATE_CHATROOM.PENDING})
export const updateChatroomMessageSuccess = (chatroom ) => ({ type: UPDATE_CHATROOM_MESSAGE, payload:chatroom})

export const SET_CHAT = asyncaction('SET_CHAT')
export const setChats = chats => ({ type: SET_CHAT, payload:chats})