import React, { Component } from 'react'
import { reduxForm, formValueSelector, formValues } from 'redux-form'
import withRedux from 'next-redux-wrapper'
import store from '../lib/store'
import ProductForm from '../view/environment/ProductForm'
import { addProductDescription } from '../lib/actions/product'
import { registerProduct,setProductImage } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser } from '../lib/actions/user'
import { bindActionCreators } from 'redux'

class ProductRegister extends Component{
	
	async componentDidMount() {
		const auth = await loadFirebase('auth')
		const { user, getUserProducts } = this.props
		await auth.onAuthStateChanged( user => user ? this.props.saveUser(user) : null) 
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
			setProductImage,
			userEmail,
			productImages,
			shortDescription
		} = this.props
		return (<ProductForm 
			productDescription={productDescription} 
			brandName={brandName}
			addProductDescription={addProductDescription} 
			productImages = {productImages}
			shortDescription={shortDescription}
			setProductImage = {setProductImage}
			productName = {productName}
			price = {price}
			handleSubmit={()=> registerProduct({
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
	form: 'product'
})(ProductRegister)

const selector = formValueSelector('product')

const mapStateToProps = state => ({
	productName: selector(state, 'productName'),
	brandName: selector(state, 'brandName'),
	price: selector(state, 'price'),
	comissionPercent: selector(state, 'comissionPercent'),
	comissionCash: selector(state, 'comissionCash'),
	productDescription: selector(state,'productDescription'),
	shortDescription: selector(state,'shortDescription'),
	userUid: state.user.uid,
	userEmail: state.user.email,
	productImages: state.productImages
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({
		addProductDescription: addProductDescription,
		saveUser: saveUser,
		setProductImage: setProductImage
	}, dispatch)

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(ProductRegister)
