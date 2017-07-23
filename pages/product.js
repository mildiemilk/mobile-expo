import React from 'react'
import ProductView from '../containers/Product'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import { reduxForm } from 'redux-form'
import { getProductFromID } from '../lib/handlers/product'

class Product extends React.Component{

	componentDidMount() {
		getProductFromID('-KnsCsR5R74tTF0oT1j4')
	}

	render(){
		const { product } = this.props
		return( <ProductView product={product} />)
	}
}

const mapStateToProps = state => ({
	product: state.product
})

export default withRedux(()=>store, mapStateToProps)(Product)