import { 
    REGISTER,
    CLEAR_ERROR, 
    SAVE_USER, 
    SIGN_OUT,
    SET_USER_PROFILE 
} from '../actions/user'

const initialState = {
    pending: false,
    error: '',
    name: '',
    uid: '',
    email: '',
    photo: '',
    membership:'',
    signedIn: false 
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case REGISTER.SUCCESS: 
        return {
            ...state,
            pending: false,
            error: "",
            signedIn: true
        } 
        case REGISTER.PENDING:
        return {
            ...state,
            pending: true,
            error: ""
        }
        case REGISTER.ERROR:
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
        case SET_USER_PROFILE:
        return {
            ...state,
            address:payload.address,
            name:payload.name,
            phone:payload.phone,
            transactionIds:payload.transactionIds,
            wallet:payload.wallet,
            membership:payload.membership
        }
        case SIGN_OUT.SUCCESS:
        return {...initialState}
        default:
        return state
    }
}
