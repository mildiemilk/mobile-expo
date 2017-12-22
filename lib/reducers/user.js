import { 
    REGISTER_SUCCESS, 
    REGISTER_PENDING, 
    REGISTER_FAILED, 
    CLEAR_ERROR, 
    SAVE_USER, 
    SIGN_OUT_SUCCESS 
} from '../actions/user'

const initialState = {
    pending: false,
    error: '',
    name: '',
    uid: '',
    email: '',
    photo: '',
    signedIn: false 
}
import {REHYDRATE} from 'redux-persist'

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case REGISTER_SUCCESS: 
        return {
            ...state,
            pending: false,
            error: "",
            signedIn: true
        } 
        case REGISTER_PENDING:
        return {
            ...state,
            pending: true,
            error: ""
        }
        case REGISTER_FAILED:
        return {
            ...state,
            pending: false,
            error: payload.error,
            signedIn: false
        }
        case SAVE_USER.PENDING:
        return {
            ...state,
            pending: true
        }
        case SAVE_USER.SUCCESS:
        return {
            ...state,
                name: payload.name,
                uid: payload.uid,
                email: payload.email,
                photo: payload.photo,
                signedIn: true,
                pending: false
        }
        case SIGN_OUT_SUCCESS:
        return {...initialState}
        case REHYDRATE:
            var incoming = action.payload.user
            if (incoming) return {...state, ...incoming}
            return state
        default:
        return state
    }
}
