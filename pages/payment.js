import React from 'react'
import PaymentView from '../view/environment/Payment'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import { createPayment, savePaymentImage } from '../lib/handlers/payment'
import { addProductTransaction, addPayment, addBankTransfer } from '../lib/actions/transaction'
import { calculateComission } from '../lib/handlers/transaction'
import { validateCreditCard } from '../lib/helpers/formvalidation'
import { createPaymentInternetBanking, savePaymentInternetBanking } from '../lib/handlers/payment'
import Modal from '../view/molecules/Modal'
import Wrapper from '../view/atoms/Wrapper'
import H3 from '../view/atoms/H3'
import WebExplain from '../view/organisms/WebExplain'

class Payment extends React.Component{
	componentDidMount() {
		if(this.props.url.query.queryParams)
			savePaymentInternetBanking(this.props.url.query.queryParams.transactionID)
		const { transaction } = this.props
			let comission = calculateComission(transaction.price, transaction.comissionCash, transaction.comissionPercent)
	} 

	ModalContext = (pending) => 
		<Wrapper>
			{pending? <H3>กำลังทำรายการ</H3>:<H3>ทำรายการเรียบร้อย</H3>}
			<WebExplain/>
		</Wrapper>

	render() { 
		const {validateCreditCard, startedUploadImage, pending, transaction, image, addPayment, addBankTransfer} = this.props
		const card = {
			name : process.env.NODE_ENV === 'production'? '' :'john doe', 
			cardNumber : process.env.NODE_ENV === 'production'? '' :'4242424242424242', 
			securityCode:process.env.NODE_ENV === 'production'? '' :'123', 
			expiryMonth:process.env.NODE_ENV === 'production'? '' :'7', 
			expiryYear:process.env.NODE_ENV === 'production'? '' :'2019'
		}
		const { total } = this.props
		return this.props.url.query.queryParams?
			<Modal context={this.ModalContext(pending)} redirectUrl='/' display={true}></Modal>
			:
			<PaymentView 
				onCheckOut={()=>createPayment(total, card ,transaction)}
				savePaymentImage={savePaymentImage}
				validateCreditCard={validateCreditCard}
				addPayment={addPayment}
				imageUpload={transaction.payment.paymentDetail}
				startedUploadImage={startedUploadImage}
				pending={pending}
				image= {image}
				addBankTransfer={addBankTransfer}
				createPaymentInternetBanking={createPaymentInternetBanking}
				transaction={transaction}
				total={total}
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
