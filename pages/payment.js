import React from 'react'
import PaymentView from '../view/environment/Payment'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import { createPayment, savePaymentImage } from '../lib/handlers/payment'
import { addProductTransaction } from '../lib/actions/transaction'
import { calculateComission } from '../lib/handlers/transaction'
import { validateCreditCard } from '../lib/helpers/formvalidation'

class Payment extends React.Component{
	componentDidMount() {
			const { cart, products, user, addProductTransaction } = this.props
			cart.addedIds.forEach( id => {
				let product = products[id]
				let quantity = cart.quantityById[id]
				let price = product.price
				let comission = calculateComission(price, product.comissionCash, product.comissionPercent)
				addProductTransaction({
					quantity,
					sellerUid:product.userUid,
					buyerUid:user.uid,
					productId:id
				})
			});
		} 

	render() { 
		const card = {
			name : 'john doe', 
			cardNumber : '4242424242424242', 
			securityCode:'123', 
			expiryMonth:'7', 
			expiryYear:'2019'
		}
		const {cardDetail, total, transaction, validateCreditCard} = this.props
		return <PaymentView 
				onCheckOut={()=>createPayment(total, card ,transaction)}
				savePaymentImage={savePaymentImage}
				validateCreditCard={validateCreditCard}
			/>
	}
}

Payment = reduxForm({form: 'payment'})(Payment)


const selector = formValueSelector('payment')
const mapStateToProps = state =>({
	cardDetail : state.form.payment ? state.form.payment.values : null,
	total : state.payment.total,
	products: state.userProducts,
	cart : state.cart,
	user: state.user,
	transaction: state.transaction,
	validateCreditCard: validateCreditCard(selector(state, 'cardNumber'), selector(state, 'month'), selector(state,'year'))
})

const mapDispatchToProps = {addProductTransaction}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Payment)
