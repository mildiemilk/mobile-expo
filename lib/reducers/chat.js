
import { NEW_CHATROOM, UPDATE_CHATROOM_MESSAGE, SET_CHAT } from '../actions/chat';
const initialState = {
    chatId:'',
    date:'',
    sellerId:'',
    buyerId:'',
    productId:'',
    chats:[]
}

export default (state = initialState, action) =>{
	switch(action.type){
        case NEW_CHATROOM.SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case UPDATE_CHATROOM_MESSAGE.SUCCESS:
            return {
                ...state,
                chats:[
                    ...state.chats,
                    action.payload
                ]
            }
        case SET_CHAT:
            return {
                ...state,
                chats:action.payload
            }
		default: 
			return state
	}
}
