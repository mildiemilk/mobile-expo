import asyncaction from './asyncaction'

export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const addProductTransaction = props => ({type: ADD_TRANSACTION,payload: props})

export const ADD_TRANSACTION_ID = 'ADD_TRANSACTION_ID'
export const addTransacionId = transactionId => ({type: ADD_TRANSACTION_ID,payload: transactionId})

export const ADD_PRODUCT_ID = 'ADD_PRODUCT_ID'
export const addProductId = productId => ({type: ADD_PRODUCT_ID,payload: productId})

export const ADD_BUYER_ID = 'ADD_BUYER_ID'
export const addBuyerId = buyerId => ({type: ADD_BUYER_ID,payload: buyerId})

export const ADD_SPONSOR_ID = 'ADD_SPONSOR_ID'
export const addSponsorId = sponsorId => ({type: ADD_SPONSOR_ID,payload: sponsorId})

export const ADD_SELLER_ID = 'ADD_SELLER_ID'
export const addSellerId = sellerId => ({type: ADD_SELLER_ID,payload: sellerId})

export const ADD_PRODUCT_DETAIL = 'ADD_PRODUCT_DETAIL'
export const addProductDetail = (productId, comissionPercent, comissionCash, price, sellerId) => ({
	type: ADD_PRODUCT_DETAIL,
	payload: {productId, comissionPercent, comissionCash, price, sellerId}
})

export const ADD_TIME_STAMP = 'ADD_TIME_STAMP'
export const addTimeStamp = () => ({type: ADD_TIME_STAMP,payload: Date()})

export const ADD_DELIVERY_DETAIL = 'ADD_DELIVERY_DETAIL'
export const addDeliveryDetail = (name, phoneNumber, email, address1, address2, province, postalCode) => ({
	type: ADD_DELIVERY_DETAIL,
	payload: {name,phoneNumber,email,address1,address2,province,postalCode}
})

export const ADD_PAYMENT = 'ADD_PAYMENT'
export const addPayment = payment => ({type: ADD_PAYMENT,payload: paymenะ})

export const GET_ALL_TRANSACTIONS = 'GET_ALL_TRANSACTIONS'
export const getAllTransactions = transactions => ({type: GET_ALL_TRANSACTIONS,payload: transactions})

export const GET_ALL_PENDING_PAYMENT_TRANSACTIONS = asyncaction('GET_ALL_PENDING_PAYMENT_TRANSACTIONS')
export const getAllPendingPaymentTransactionsPending = () => {action: GET_ALL_PENDING_PAYMENT_TRANSACTIONS.PENDING}
export const getAllPendingPaymentTransactionsSuccess = transactions => ({action: GET_ALL_PENDING_PAYMENT_TRANSACTIONS.SUCCESS, payload: transactions})
export const getAllPendingPaymentTransactionsError = error => ({action: GET_ALL_PENDING_PAYMENT_TRANSACTIONS.ERROR, payload: error})
