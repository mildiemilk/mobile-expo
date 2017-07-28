import React from 'react'
import ProductView from '../containers/Product'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import { getProductFromID, getUserProducts } from '../lib/handlers/product'
import { saveSharedUser } from '../lib/actions/sharedUser'
import { addQuantity, minusQuantity } from '../lib/handlers/cart'
import loadFirebase from '../lib/database'
import { saveUser } from '../lib/actions/user'

const productUid = '-KnsCsR5R74tTF0oT1j4'
const userUid = "IRg5vCrWI1gpat8OwFo5Cxo2IDS2"

class Product extends React.Component{
	async componentDidMount() {
		await getProductFromID(productUid)
	}

	render(){
		const { product, url, minusQuantity, addQuantity, cart } = this.props
		const productID = url.product || null 
		const userID = url.user || null
		return( <ProductView 
			product={product} 
			minusQuantity={minusQuantity} addQuantity={addQuantity} productUid={productUid} productQuantity={cart.quantityById[productUid] || 0 }/>)
	}
}

const mapStateToProps = state => ({
	product: state.product,
	cart : state.cart,
	user : state.user
})

const mapDispatchToProps = dispatch => 
bindActionCreators({
	saveSharedUser,
	addQuantity,
	minusQuantity
}, dispatch)

export default withRedux(()=>store, mapStateToProps, mapDispatchToProps)(Product)