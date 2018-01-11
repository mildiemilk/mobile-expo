import { 
  GET_PROFILE,
  GET_TABLE,
} from '../actions/profile'

const initialState = {
  name: '',
  phone: '',
  email: '',
  address: '',
  wallet: '',
  transactionIds: [],
}

export default (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
      case GET_PROFILE: 
      const { name, phone, email, address, wallet, transactionIds } = payload
      return {
          ...state,
          name,
          phone,
          email,
          address,
          wallet,
          transactionIds
        }
      case GET_TABLE:
      return {
        ...state,
        transactionIds: payload
      }
      default:
      return state
  }
}
