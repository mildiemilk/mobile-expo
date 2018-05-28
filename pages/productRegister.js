import { Component } from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import ProductForm from '../view/environment/ProductForm'
import { addProductDescription, removeProductImage, clearProductImages } from '../lib/actions/product'
import { 
	registerProduct,
	setProductImage, 
	updateProduct, 
	saveProductDescriptionImage, 
	saveProductDescriptionVideo } from '../lib/handlers/product'
import { getProductFromID } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser } from '../lib/actions/user'

class ProductRegister extends Component {
	async componentDidMount() {
		const auth = await loadFirebase('auth')
		const { productID } = this.props.url.query
		productID ? getProductFromID(productID) : null
		await auth.onAuthStateChanged(user => (user ? this.props.saveUser(user) : null))
		this.props.clearProductImages()
	}

	async componentWillReceiveProps(nextProps) {
		;(await nextProps.url.query.productID)
			? getProductFromID(nextProps.url.query.productID)
			: null
	}


	render(){
		const 
			{
				productName, 
				addProductDescription, 
				productDescription, 
				brandName, 
				price, 
				comissionCash,
				userUid,
				userEmail,
				productImages,
				shortDescription,
				nextDescription, 
				stock,
				removeProductImage,
				productImagePending,
				variety
			} = this.props
		const productID =  this.props.url.query.productID
		let comissionWithinLimit = parseInt(price) * 0.7 >  parseInt(comissionCash || 0)
		return (<ProductForm 
			nextDescription={nextDescription}
			productDescription={productDescription} 
			brandName={brandName}
			saveProductDescriptionImage={saveProductDescriptionImage}
			saveProductDescriptionVideo={saveProductDescriptionVideo}
			addProductDescription={addProductDescription}
			productImages = {productImages}
			shortDescription={shortDescription}
			setProductImage = {setProductImage}
			productImagePending={productImagePending}
			removeProductImage={removeProductImage}
			productName = {productName}
			price = {price}
			comissionCash = {comissionCash}
			comissionWithinLimit = {comissionWithinLimit}
			handleSubmit={()=> !productID ? registerProduct({
				active: true,
				productName, 
				brandName, 
				userUid,
				userEmail,
				price, 
				comissionCash,
				productDescription,
				productImages,
				shortDescription,
				nextDescription,
				stock,
				variety
			})
				: updateProduct(productID,{
					active: true,
					productName, 
					brandName, 
					userUid,
					userEmail,
					price, 
					comissionCash,
					productDescription,
					productImages,
					shortDescription,
					nextDescription,
					stock,
					variety
				})} 
		/>)
	}
}	

ProductRegister = reduxForm({
	form: 'product',
	enableReinitialize:true, //this has to enable so that it load value of productstate to edit
	keepDirtyOnReinitialize:true
})(ProductRegister)

const selector = formValueSelector('product')


const mapStateToProps = state => ({
	initialValues: state.product,
	productName: selector(state, 'productName'),
	brandName: selector(state, 'brandName'),
	price: selector(state, 'price'),
	comissionCash: selector(state, 'comissionCash'),
	productDescription: selector(state, 'productDescription'),
	shortDescription: selector(state, 'shortDescription'),
	stock: selector(state, 'stock'),
	nextDescription: selector(state,'nextDescription'),
	variety:selector(state,'variety'),
	userUid: state.user.uid,
	userEmail: state.user.email,
	productImages: state.productImages,
	productImagePending: state.main.productImagePending,
	product: state.product,
})

const mapDispatchToProps = {
	addProductDescription,
	saveUser,
	removeProductImage,
	clearProductImages
}

export default withRedux(() => store, mapStateToProps, mapDispatchToProps)(ProductRegister)
