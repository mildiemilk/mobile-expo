export const SET_TOTAL = 'SET_TOTAL'
export const setTotal = (total)=>({type: SET_TOTAL, payload: {total: total}})

export const SET_PAYMENT_RESPONSE = 'SET_PAYMENT_RESPONSE'
export const setPaymentResponse = (paymentResponse) => ({type: SET_PAYMENT_RESPONSE, payload: {paymentResponse: paymentResponse}})

export const SET_PAYMENT_IMAGE = 'SET_PAYMENT_IMAGE'
export const setPaymentImage = paymentImage => ({
    type: SET_PAYMENT_IMAGE,
    payload: paymentImage
})