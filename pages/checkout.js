import React from 'react'
import CheckoutView from '../view/environment/Checkout'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import { setTotal } from '../lib/actions/payment'

class Checkout extends React.Component{

	componentDidMount() {
		let total = 0 
		const { products, cart, setTotal } = this.props
		cart.addedIds.map( (key, count) =>{
			total += cart.quantityById[key] * products[key].price
		})
		setTotal(total)
	}

	render() {
		const { cart, products, product, payment } = this.props
		return <CheckoutView cart={cart} products={products} product={product} total={payment.total}/>
	}
} 

Checkout = reduxForm({
	form:'address'
})(Checkout)

const selector = formValueSelector('address')

const mapStateToProps = state => ({
	cart: state.cart,
	products: state.userProducts,
	product: state.product,
	payment: state.payment,
	name: selector(state, 'name'),
	phoneNumber: selector(state, 'phoneNumber'),
	address1: selector(state, 'address1'),
	address2: selector(state, 'address2'),
	province: selector(state, 'province'),
	postalCode: selector(state, 'postalCode')
})

const mapDispatchToProps = {
	setTotal
}

export default withRedux(()=>store, mapStateToProps, mapDispatchToProps)(Checkout)
