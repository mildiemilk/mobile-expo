import asyncaction from './asyncaction'

export const SET_TOTAL = 'SET_TOTAL'
export const setTotal = total=>({type: SET_TOTAL, payload: {total: total}})

export const SET_PAYMENT_RESPONSE = 'SET_PAYMENT_RESPONSE'
export const setPaymentResponse = paymentResponse => ({type: SET_PAYMENT_RESPONSE, payload: {paymentResponse: paymentResponse}})

export const SAVE_PAYMENT_IMAGE = asyncaction('SAVE_PAYMENT_IMAGE')
export const savePaymentImagePending = () => ({type:SAVE_PAYMENT_IMAGE.PENDING})
export const savePaymentImageSuccess = image => ({type: SAVE_PAYMENT_IMAGE.SUCCESS,payload: image})

export const SAVE_PAYMENT = asyncaction('SAVE_PAYMENT')
export const savePaymentPending = () => ({type:SAVE_PAYMENT.PENDING})
export const savePaymentSuccess = () => ({type: SAVE_PAYMENT.SUCCESS})