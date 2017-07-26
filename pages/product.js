import React from 'react'
import ProductView from '../containers/Product'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import { getProductFromID } from '../lib/handlers/product'
import { saveSharedUser } from '../lib/actions/sharedUser'



class Product extends React.Component{

	async componentDidMount() {
		await getProductFromID('-KnsCsR5R74tTF0oT1j4')
		this.props.saveSharedUser('8anL3Kh8MudfQyZr7ZyBxrl34zg2')
		this.props.addItemToCart('-KnsCsR5R74tTF0oT1j4')
	}

	render(){
		const { product, url, minusQuantity, addQuantity } = this.props
		const productID = url.product || null 
		const userID = url.user || null
		return( <ProductView 
			product={product} 
			onClickMinus={minusQuantity} onClickAdd={addQuantity}/>)
	}
}

const mapStateToProps = state => ({
	product: state.product,
	cart : state.cart
})

const mapDispatchToProps = dispatch => 
bindActionCreators({
	saveSharedUser
}, dispatch)

export default withRedux(()=>store, mapStateToProps, mapDispatchToProps)(Product)