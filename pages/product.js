import React from 'react'
import ProductView from '../view/environment/Product'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import { getProductFromID, getUserProducts } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser, setSeller } from '../lib/actions/user'
import { addProductDetail, addSponsorId, addSellerId, addProductId, addBuyerId, addQuantity, minusQuantity } from '../lib/actions/transaction'
import { addProductTransaction } from '../lib/handlers/transaction'

class Product extends React.Component{

	static async getInitialProps(ctx) {
		const { req } = ctx
		const database = await loadFirebase('database')
		if(req){
			const productSSR = await database
				.ref("products/"+ req.params.product_id)
				.once('value')
				.then(snapshot => snapshot.val())
				return {productSSR}
		}
	}
	async componentDidMount() {
		getProductFromID(this.props.url.query.queryParams.productID)
		const auth = await loadFirebase('auth')
		await auth.onAuthStateChanged( user => {user? this.props.saveUser(user): null}) 
		await this.props.addSponsorId(this.props.url.query.queryParams.userID)
		await this.props.addProductId(this.props.url.query.queryParams.productID)
	}


	async componentWillReceiveProps(nextProps) {
		const {productName, comissionCash, price, userUid} = this.props.product
		const {uid} = this.props.user

		nextProps.product !== this.props.product ? await getUserProducts( nextProps.product.userUid ) : null
		nextProps.product.userUid !== userUid ? this.props.addSellerId(nextProps.product.userUid) : null
		nextProps.user.uid !== uid ? this.props.addBuyerId(nextProps.user.uid) : null
	}

	render(){
		const { product, url, minusQuantity, addQuantity, addProductTransaction, transaction } = this.props
		return( <ProductView 
			product={this.props.productSSR||product} 
			minusQuantity={minusQuantity} 
			addQuantity={addQuantity} 
			productUid={url.query.productID} 
			quantity={transaction.quantity || 1 }
			addProductTransaction={addProductTransaction}
			/>)
	}
}

const mapStateToProps = state => ({
	product: state.product,
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
