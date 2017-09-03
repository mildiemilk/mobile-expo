import React from 'react'
import PaymentView from '../containers/Payment.js'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import { reduxForm } from 'redux-form'
import { createPayment } from '../lib/handlers/payment'

let Payment = ({cardDetail, total, sharedUser}) => <PaymentView onCheckOut={()=>createPayment(total, sharedUser.sharedUserUid)}/>

Payment = reduxForm({form: 'payment'})(Payment)

const mapStateToProps = state => ({
	cardDetail : state.form.payment ? state.form.payment.values : null,
	total : state.payment.total,
	sharedUser: state.sharedUser
})

export default withRedux(()=>store,mapStateToProps)(Payment)
