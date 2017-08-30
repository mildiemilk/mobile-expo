import React from 'react'
import PaymentView from '../containers/Payment.js'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import { reduxForm } from 'redux-form'
import { createPayment } from '../lib/handlers/payment'

let Payment = ({cardDetail, total}) => <PaymentView onCheckOut={()=>createPayment(total)}/>

Payment = reduxForm({
	form: 'payment'
})(Payment)

const mapStateToProps = state => ({
	cardDetail : state.form.payment ? state.form.payment.values : null,
	total : state.payment.total
})

export default withRedux(()=>store,mapStateToProps)(Payment)
