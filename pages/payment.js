import React from 'react'
import PaymentView from '../view/environment/Payment'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import { createPayment, savePaymentImage } from '../lib/handlers/payment'
import { savePaymentPending, savePaymentSuccess } from '../lib/actions/payment'
import { addProductTransaction, addPayment, addBankTransfer } from '../lib/actions/transaction'
import { calculateComission } from '../lib/handlers/transaction'
import { validateCreditCard } from '../lib/helpers/formvalidation'
import { createPaymentInternetBanking, savePaymentInternetBanking } from '../lib/handlers/payment'
import Modal from '../view/molecules/Modal'
import Wrapper from '../view/atoms/Wrapper'
import H3 from '../view/atoms/H3'
import WebExplain from '../view/organisms/WebExplain'
import fetch from 'isomorphic-fetch'
import loadFirebase from '../lib/database'

class Payment extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			key : ''
		}
	}

	async componentDidMount() {
		if(this.props.url.query.queryParams)
			savePaymentInternetBanking(this.props.url.query.queryParams.transactionID)
		const { transaction } = this.props
			let comission = calculateComission(transaction.price, transaction.comissionCash)
	} 

	ModalContext = (pending) => 
		<Wrapper>
			{pending? <H3>กำลังทำรายการ</H3>:<H3>ทำรายการเรียบร้อย</H3>}
			<WebExplain/>
		</Wrapper>

	sleep = n => new Promise((resolve, reject) => setTimeout(resolve, n))

	onSubmit = async(e) => {
		// e.preventDefault()
		// let db = await loadFirebase('database')
		// let key = await db.ref().child('transactions').push().key
		const key = Math.round(Math.floor(Date.now())/1000)
		this.setState({ key })
		console.log('key', key)
		createPaymentInternetBanking(this.props.transaction, key)
		// const key = '3434'
	// 	var form = $('#ajax-contact');
	// 	var formData = $(form).serialize();
	// 	$.ajax({
	// 		type: 'POST',
	// 		url: 'https://www.thaiepay.com/epaylink/payment.aspx',
	// 		data: formData
	// }).done( response => console.log('res', response))
	}

	onFetch = async() => {
		const detail = {
			"merchantid" : "41911567",
			"refno" : "99999",
			"customeremail" : "thedo.a1412@gmail.com",
			"productdetail" : "testing payment",
			"total" : 100
		}
		let form_data = new FormData();
		for ( let key in detail ) {
			form_data.append(key, detail[key]);
		}
		// const key = await createPaymentInternetBanking(this.props.transaction)
		// this.setState({ key }, console.log('key====>', key))
		// const url = "https://www.thaiepay.com/epaylink/payment.aspx"
		fetch("https://www.thaiepay.com/epaylink/payment.aspx", { method: 'POST', body: form_data, redirect: 'follow'})
			.then(response => {
				// HTTP 301 response
			})
			.catch(function(err) {
				console.info(err + " url: " + url);
			});

	}

	render() { 
		const { key } = this.state
		const {transaction} = this.props
		// let db = await loadFirebase('database')
		// let key = await db.ref().child('transactions').push().key
		const card = {
			name : process.env.NODE_ENV === 'production'? '' :'john doe', 
			cardNumber : process.env.NODE_ENV === 'production'? '' :'4242424242424242', 
			securityCode:process.env.NODE_ENV === 'production'? '' :'123', 
			expiryMonth:process.env.NODE_ENV === 'production'? '' :'7', 
			expiryYear:process.env.NODE_ENV === 'production'? '' :'2019'
		}
		return this.props.url.query.queryParams?
		<Modal context={this.ModalContext(pending)} redirectUrl='/' display={true}>Payment result</Modal>:
		<div>
		<PaymentView 
			{...this.props}
			onCheckOut={()=>createPayment(total, card ,transaction)}
			imageUpload={transaction.payment.paymentDetail}
			savePaymentImage={savePaymentImage}
		/>
		<form method="post" action="https://www.thaiepay.com/epaylink/payment.aspx" onSubmit={key?true:false}>
			<input type="hidden" name="refno" value={key}/>
			<input type="hidden" name="merchantid" value="41911567"/>
			<input type="hidden" name="customeremail" value={transaction.email}/>
			<input type="hidden" name="productdetail" value={transaction.productName}/>
			<input type="hidden" name="total" value={transaction.price*transaction.quantity}/>
			{/* <input type="hidden" name="returnurl" value='http://localhost:3000/payment/'/> */}
			<br/> 
			<label onClick={this.onSubmit}><input type="submit" name="Submit" value="Comfirm Order"/></label>
		</form>
		<button onClick={this.onFetch}>test</button>
		</div>
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

const mapDispatchToProps = {
	addProductTransaction, 
	addPayment, 
	addBankTransfer,
	savePaymentPending,
	savePaymentSuccess
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Payment)
