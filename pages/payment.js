import React from 'react'
import PaymentView from '../view/environment/Payment'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import { createPayment, savePaymentImage } from '../lib/handlers/payment'
import { addProductTransaction, addPayment, addBankTransfer } from '../lib/actions/transaction'
import { calculateComission } from '../lib/handlers/transaction'
import { validateCreditCard } from '../lib/helpers/formvalidation'

class Payment extends React.Component{
	componentDidMount() {
			const { transaction } = this.props
				let comission = calculateComission(transaction.price, transaction.comissionCash, transaction.comissionPercent)
		} 

	render() { 
		const {validateCreditCard, startedUploadImage, pending, transaction, image, addPayment, addBankTransfer} = this.props
		const card = {
			name : process.env.NODE_ENV === 'production'? '' :'john doe', 
			cardNumber : process.env.NODE_ENV === 'production'? '' :'4242424242424242', 
			securityCode:process.env.NODE_ENV === 'production'? '' :'123', 
			expiryMonth:process.env.NODE_ENV === 'production'? '' :'7', 
			expiryYear:process.env.NODE_ENV === 'production'? '' :'2019'
		}
		return <PaymentView 
				onCheckOut={()=>createPayment(total, card ,transaction)}
				savePaymentImage={savePaymentImage}
				validateCreditCard={validateCreditCard}
				addPayment={addPayment}
				imageUpload={transaction.payment.paymentDetail}
				startedUploadImage={startedUploadImage}
				pending={pending}
				image= {image}
				addBankTransfer={addBankTransfer}
			/>
	}
}

Payment = reduxForm({form: 'payment'})(Payment)

const selector = formValueSelector('payment')
const mapStateToProps = state =>({
	cardDetail : state.form.payment ? state.form.payment.values : null,
	total : state.payment.total,
	products: state.userProducts,
	transaction: state.transaction,
	user: state.user,
	validateCreditCard: validateCreditCard(selector(state, 'cardNumber'), selector(state, 'month'), selector(state,'year')),
	startedUploadImage: state.payment.startedUploadImage,
	pending: state.payment.pending,
	image: state.payment.paymentImage
})

const mapDispatchToProps = {addProductTransaction, addPayment, addBankTransfer}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Payment)
