import React from 'react'
import CheckoutView from '../containers/Checkout'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
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
		const { cart, products, product } = this.props
		return <CheckoutView cart={cart} products={products} product={product}/>
	}
} 


const mapStateToProps = state => ({
	cart: state.cart,
	products: state.userProducts,
	product: state.product
})

const mapDispatchToProps = {
	setTotal
}

export default withRedux(()=>store, mapStateToProps, mapDispatchToProps)(Checkout)
