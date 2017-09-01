import React from 'react'
import ProductView from '../containers/Product'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import { getProductFromID, getUserProducts } from '../lib/handlers/product'
import { saveSharedUser } from '../lib/actions/sharedUser'
import { addQuantity, minusQuantity } from '../lib/handlers/cart'
import loadFirebase from '../lib/database'
import { saveUser, setSeller } from '../lib/actions/user'

const userUid = "IRg5vCrWI1gpat8OwFo5Cxo2IDS2"

class Product extends React.Component{
	async componentDidMount() {
		this.props.setSeller(this.props.url.query.userID)
		getProductFromID(this.props.url.query.productID)
	}

	async componentWillReceiveProps(nextProps) {
		nextProps.product !== this.props.product ? await getUserProducts( nextProps.product.userUid ) : null
	}

	render(){
		const { product, url, minusQuantity, addQuantity, cart } = this.props
		return( <ProductView 
			product={product} 
			minusQuantity={minusQuantity} addQuantity={addQuantity} productUid={url.query.productID} productQuantity={cart.quantityById[url.query.productID] || 0 }/>)
	}
}

const mapStateToProps = state => ({
	product: state.product,
	cart : state.cart,
	user : state.user
})

const mapDispatchToProps = {
	saveSharedUser,
	addQuantity,
	minusQuantity,
	setSeller
}

export default withRedux(()=>store, mapStateToProps, mapDispatchToProps)(Product)
