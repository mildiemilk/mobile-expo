import React from 'react'
import ProductView from '../view/environment/Product'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import { getProductFromID, getUserProducts, setProductActive } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser, setSeller } from '../lib/actions/user'
import { addProductDetail, addSponsorId, addSellerId, addProductId, addBuyerId, addQuantity, minusQuantity, addVariety } from '../lib/actions/transaction'
import { addProductTransaction } from '../lib/handlers/transaction'
import { onChangeChatroom, loadAndUpdateChatroom, newChatroom, updateChatroom} from '../lib/handlers/chat'

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
		nextProps.product !== this.props.product && await getUserProducts( nextProps.product.userUid )
		nextProps.product.userUid !== userUid && this.props.addSellerId(nextProps.product.userUid)
		nextProps.user.uid !== uid && this.props.addBuyerId(nextProps.user.uid)
		nextProps.chat.chatId !== this.props.chat.chatId && await onChangeChatroom(this.props.chat.chatId)
	}

	render(){
		const { product, url, transaction } = this.props
		return( <ProductView 
			{...this.props}
			product={this.props.productSSR||product} 
			productUid={url.query.productID} 
			quantity={transaction.quantity || 1 }
			setProductActive={setProductActive}
			loadAndUpdateChatroom={loadAndUpdateChatroom} 
			newChatroom={newChatroom}
			updateChatroom={updateChatroom}
			/>)
	}
}

const mapStateToProps = state => ({
	product: state.product,
	user : state.user,
	transaction : state.transaction,
	chat: state.chat
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
	saveUser,
	addVariety
}

export default withRedux(()=>store, mapStateToProps, mapDispatchToProps)(Product)
