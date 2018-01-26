import React from 'react'
import ProductView from '../view/environment/Product'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import { getProductFromID, getUserProducts } from '../lib/handlers/product'
import { addQuantity, minusQuantity } from '../lib/handlers/cart'
import loadFirebase from '../lib/database'
import { saveUser, setSeller } from '../lib/actions/user'
import { addProductDetail, addSponsorId, addSellerId, addProductId, addBuyerId } from '../lib/actions/transaction'
import { addProductTransaction } from '../lib/handlers/transaction'

const userUid = "IRg5vCrWI1gpat8OwFo5Cxo2IDS2"

class Product extends React.Component{
	async componentWillMount() {
		const auth = await loadFirebase('auth')
		await auth.onAuthStateChanged( user => {user? this.props.saveUser(user): null}) 
		this.props.addSponsorId(this.props.url.query.userID)
		this.props.addProductId(this.props.url.query.productID)
		this.props.addQuantity(this.props.url.query.productID)
		getProductFromID(this.props.url.query.productID)
	}

	async componentWillReceiveProps(nextProps) {
		const {productName, comissionCash, comissionPc, price, userUid} = this.props.product
		const {uid} = this.props.user

		nextProps.product !== this.props.product ? await getUserProducts( nextProps.product.userUid ) : null
		nextProps.product.userUid !== userUid ? this.props.addSellerId(nextProps.product.userUid) : null
		nextProps.user.uid !== uid ? this.props.addBuyerId(nextProps.user.uid) : null
	}

	render(){
		const { product, url, minusQuantity, addQuantity, cart, addProductTransaction } = this.props
		return( <ProductView 
			product={product} 
			minusQuantity={minusQuantity} addQuantity={addQuantity} productUid={url.query.productID} productQuantity={cart.quantityById[url.query.productID] || 1 }
			addProductTransaction={addProductTransaction}
			/>)
	}
}

const mapStateToProps = state => ({
	product: state.product,
	cart : state.cart,
	user : state.user,
	transaction : state.transaction
})

const mapDispatchToProps = {
	addProductDetail,
	addSponsorId,
	addProductTransaction,
	addQuantity,
	minusQuantity,
	setSeller,
	addSellerId,
	addProductId,
	addBuyerId,
	saveUser
}

export default withRedux(()=>store, mapStateToProps, mapDispatchToProps)(Product)
