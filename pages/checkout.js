import React from 'react'
import CheckoutView from '../containers/Checkout'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'

const Checkout = ({cart, products}) => <CheckoutView cart={cart} products={products}/>

const mapStateToProps = state => ({
	cart: state.cart,
	products: state.userProducts
})

export default withRedux(()=>store, mapStateToProps)(Checkout)