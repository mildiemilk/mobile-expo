import store from '../store'
import {addPayment as addPaymentAction} from '../actions/transaction'

export const calculateComission = (price, sponsorComissionCash, sellerComissionPc) => {
	let sponsorComission = (parseFloat(sponsorComissionCash) + parseFloat(price) * (parseFloat(sellerComissionPc)/100))
	return ({
			sponsor: sponsorComission,
			seller: parseFloat(price) * 0.90 - sponsorComission
	})
}

export const addPayment = (type, acquirer) => {
	store.dispatch(addPaymentAction(type, acquirer))
}