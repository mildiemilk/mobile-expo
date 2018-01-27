import { 
  GET_PROFILE,
  GET_TABLE,
  ADD_PROFILE_DETAIL,
  ADD_PROFILE_IMAGE
} from '../actions/profile'

const initialState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  wallet: '',
  transactionIds: [],
  profileImage: ''
}

export default (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
      case GET_PROFILE: 
      const { name, phone, email, address, wallet, transactionIds, profileImage } = payload
      return {
          ...state,
          name,
          phone,
          email,
          address,
          wallet,
          profileImage,
          transactionIds
        }
      case GET_TABLE:
      return {
        ...state,
        transactionIds: payload
      }
      case ADD_PROFILE_DETAIL:
      return {
        ...state,
        address,
        email,
        phone,
      }
      case ADD_PROFILE_IMAGE:
      return {
        ...state,
        profileImage: payload,
      }
      default:
      return state
  }
}
