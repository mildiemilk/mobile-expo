import React, { Component } from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import ProductForm from '../view/environment/ProductForm'
import { addProductDescription } from '../lib/actions/product'
import { registerProduct,setProductImage, updateProduct, saveProductDescriptionImage } from '../lib/handlers/product'
import { getProductFromID } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser } from '../lib/actions/user'
import { bindActionCreators } from 'redux'

class ProductRegister extends Component {
    async componentDidMount() {
        const auth = await loadFirebase('auth')
        const { productID } = this.props.url.query
        const { user, getUserProducts } = this.props
        productID ? getProductFromID(productID) : null
        await auth.onAuthStateChanged(user => (user ? this.props.saveUser(user) : null))
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
			comissionPercent,
			comissionCash,
			userUid,
			userEmail,
			productImages,
			shortDescription,
			nextDescription
		} = this.props
		const productID =  this.props.url.query.productID
		let comissionWithinLimit = parseInt(price) * 0.7 > parseInt(price) * parseInt(comissionPercent || 0) / 100 + parseInt(comissionCash || 0)

		return (<ProductForm 
			nextDescription={nextDescription}
			productDescription={productDescription} 
			brandName={brandName}
			saveProductDescriptionImage={saveProductDescriptionImage}
			addProductDescription={addProductDescription} 
			productImages = {productImages}
			shortDescription={shortDescription}
			setProductImage = {setProductImage}
			productName = {productName}
            price = {price}
			comissionCash = {comissionCash}
			comissionPercent = {comissionPercent}
			comissionWithinLimit = {comissionWithinLimit}
			handleSubmit={()=> productID === '' ? registerProduct({
				productName, 
				brandName, 
				userUid,
				userEmail,
				price, 
				comissionPercent,
				comissionCash,
				productDescription,
				productImages,
				shortDescription
			})
			: updateProduct(productID,
				{
				productName, 
				brandName, 
				userUid,
				userEmail,
				price, 
				comissionPercent,
				comissionCash,
				productDescription,
				productImages,
				shortDescription
			})} 
		/>)
	}
}	

ProductRegister = reduxForm({
    form: 'product',
    enableReinitialize: true
})(ProductRegister)

const selector = formValueSelector('product')


const mapStateToProps = state => ({
    initialValues: state.product,
    productName: selector(state, 'productName'),
    brandName: selector(state, 'brandName'),
    price: selector(state, 'price'),
    comissionPercent: selector(state, 'comissionPercent'),
    comissionCash: selector(state, 'comissionCash'),
    productDescription: selector(state, 'productDecription'),
    shortDescription: selector(state, 'shortDescription'),
    stock: selector(state, 'stock'),
    nextDescription: selector(state,'nextDescription'),
    userUid: state.user.uid,
    userEmail: state.user.email,
    productImages: state.productImages
})

const mapDispatchToProps = {
		addProductDescription,
		saveUser
	}

export default withRedux(() => store, mapStateToProps, mapDispatchToProps)(ProductRegister)
