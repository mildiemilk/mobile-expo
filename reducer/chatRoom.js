import { combineReducers } from 'redux';

import messages from './messages';

const initialState = {
    height: 0
}

const meta = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_MESSAGES_HEIGHT':
            return Object.assign({}, state, {
                height: action.height
            });
        default:
            return state
    }
}

const chatroom = combineReducers({
    messages,
    meta
});

export default chatroom;