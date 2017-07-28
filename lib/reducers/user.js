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
    error: "",
    name: "",
    uid: "",
    email: "",
    photo: ""
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case REGISTER_SUCCESS: 
        return {
            ...state,
            pending: false,
            error: ""
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
            error: payload.error
        }
        case CLEAR_ERROR: 
        return {
            ...state,
            error: ""
        }
        case SAVE_USER:
        return {
            ...state,
                name: payload.name,
                uid: payload.uid,
                email: payload.email,
                photo: payload.photo
        }
        case SIGN_OUT_SUCCESS:
        return initialState
        default:
        return state
    }
}