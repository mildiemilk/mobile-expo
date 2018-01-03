export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const ADD_TRANSACTION_ID = 'ADD_TRANSACTION_ID'
export const ADD_BUYER_ID = 'ADD_BUYER_ID'
export const ADD_SPONSOR_ID = 'ADD_SPONSOR_ID'
export const ADD_SELLER_ID = 'ADD_SELLER_ID'
export const ADD_PRODUCT_DETAIL = 'ADD_PRODUCT_DETAIL'
export const ADD_TIME_STAMP = 'ADD_TIME_STAMP'
export const ADD_DELIVERY_DETAIL = 'ADD_DELIVERY_DETAIL'
export const ADD_PAYMENT = 'ADD_PAYMENT'

export const addProductTransaction = props => ({
	type: ADD_TRANSACTION,
	payload: props
})

export const addTransacionId = transactionId => ({
	type: ADD_TRANSACTION_ID,
	payload: transactionId
})

export const addBuyerId = buyerId => ({
	type: ADD_BUYER_ID,
	payload: buyerId
})

export const addSponsorId = sponsorId => ({
	type: ADD_SPONSOR_ID,
	payload: sponsorId
})

export const addSellerId = sellerId => ({
	type: ADD_SELLER_ID,
	payload: sellerId
})

export const addProductDetail = (productId, comissionPc, comissionCash, price, sellerId) => ({
	type: ADD_PRODUCT_DETAIL,
	payload: {
		productId, comissionPc, comissionCash, price, sellerId
	}
})

export const addTimeStamp = () => ({
	type: ADD_TIME_STAMP,
	payload: Date()
})

export const addDeliveryDetail = (name, phoneNumber, email, address1, address2, province, postalCode) => ({
	type: ADD_DELIVERY_DETAIL,
	payload: {
		name,
		phoneNumber,
		email,
		address1,
		address2,
		province,
		postalCode
	}
})

export const addPayment = (type, acquirer) => ({
	type: ADD_PAYMENT,
	payload: {
		type,
		acquirer
	}
})