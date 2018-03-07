import React from 'react'
import CheckoutView from '../view/environment/Checkout'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import { setTotal } from '../lib/actions/payment'
import { addDeliveryDetail } from '../lib/handlers/transaction'

class Checkout extends React.Component{

	componentDidMount() {
		let total = 0 
		const { products, transaction, setTotal } = this.props
		total = transaction.quantity * transaction.price
		setTotal(total)
	}

	render() {
		const { transaction,products, product, payment, addDeliveryDetail, name, address1, address2, province, postalCode, phoneNumber, email} = this.props
		return <CheckoutView 
				products={products} 
				transaction = {transaction}
				product={product} 
				total={payment.total} 
				addDeliveryDetail={()=>this.props.addDeliveryDetail(name, phoneNumber, email, address1, address2, province, postalCode)}
			/>
	}
} 

Checkout = reduxForm({
	form:'address'
})(Checkout)

const selector = formValueSelector('address')

const mapStateToProps = state => ({
	products: state.userProducts,
	product: state.product,
	payment: state.payment,
	transaction: state.transaction,
	name: selector(state, 'name'),
	phoneNumber: selector(state, 'phoneNumber'),
	email: selector(state, 'email'),
	address1: selector(state, 'address1'),
	address2: selector(state, 'address2'),
	province: selector(state, 'province'),
	postalCode: selector(state, 'postalCode')
})

const mapDispatchToProps = {
	setTotal,
	addDeliveryDetail
}

export default withRedux(()=>store, mapStateToProps, mapDispatchToProps)(Checkout)
