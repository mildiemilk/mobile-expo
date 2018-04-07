import asyncaction from './asyncaction'

export const ADD_QUANTITY = 'ADD_QUANTITY'
export const addQuantity = () => ({type: ADD_QUANTITY})

export const MINUS_QUANTITY = 'MINUS_QUANTITY'
export const minusQuantity = () => ({type: MINUS_QUANTITY})

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
export const addProductDetail = (productId, comissionCash, price, sellerId) => ({
	type: ADD_PRODUCT_DETAIL,
	payload: {productId, comissionCash, price, sellerId}
})

export const ADD_TIME_STAMP = 'ADD_TIME_STAMP'
export const addTimeStamp = () => ({type: ADD_TIME_STAMP,payload: Date()})

export const ADD_DELIVERY_DETAIL = 'ADD_DELIVERY_DETAIL'
export const addDeliveryDetail = deliveryDetail => ({type: ADD_DELIVERY_DETAIL,payload: deliveryDetail})

export const ADD_PAYMENT = 'ADD_PAYMENT'
export const addPayment = payment => ({type: ADD_PAYMENT,payload: payment})

export const GET_ALL_TRANSACTIONS = 'GET_ALL_TRANSACTIONS'
export const getAllTransactions = transactions => ({type: GET_ALL_TRANSACTIONS,payload: transactions})

export const SET_PENDING_PAYMENT_TRANSACTION = asyncaction('SET_PENDING_PAYMENT_TRANSACTION')
export const setPendingPaymentTransactionPending = () => ({type: SET_PENDING_PAYMENT_TRANSACTION.PENDING})
export const setPendingPaymentTransactionSuccess = transactions => ({type: SET_PENDING_PAYMENT_TRANSACTION.SUCCESS, payload: transactions})
export const setPendingPaymentTransactionError = error => ({type: SET_PENDING_PAYMENT_TRANSACTION.ERROR, payload: error})

export const ADD_BANK_TRANSFER = 'ADD_BANK_TRANSFER'
export const addBankTransfer = bank => ({type:ADD_BANK_TRANSFER, payload: bank})

export const TRANSACTION_APPROVED = 'TRANSACTION_APPROVED'
export const transactionApproved = transactionId => ({type:TRANSACTION_APPROVED, payload: transactionId})

export const ADD_VARIETY = 'ADD_VARIETY'
export const addVariety = variety => ({type:ADD_VARIETY, payload:variety})