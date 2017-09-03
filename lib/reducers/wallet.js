import {REHYDRATE} from 'redux-persist/constants'
import { SET_WALLET } from '../actions/wallet'

const initialState = {
	sellerWallet: {...wallet},
	ownerWallet: {...wallet},
	buyerWallet: {...wallet}
}

const wallet = {
	balance: 0,
	userUid: ""
}

export default (state = initialState, action) =>{
	const { type, payload } = action
	switch(type) {
		case SET_WALLET: 

		case REHYDRATE:
		var incoming = action.payload.wallet
		if (incoming) return {...state, ...incoming}
		return state
		default: 
		return state
	}
}
