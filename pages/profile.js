import React, { Component } from 'react'
import store from '../lib/store'
import withRedux from "next-redux-wrapper"
import ProfileView from '../view/environment/Profile'
import { getUserProducts, setProductStock } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser, saveUserPending } from '../lib/actions/user'


class Profile extends Component {

	async componentDidMount() {
		const auth = await loadFirebase('auth')
		const user = await auth.onAuthStateChanged( user => {
			this.props.saveUserPending()
			user ? this.props.saveUser(user) : null
		})
		await	getUserProducts(this.props.user.uid)
	}

	async componentWillReceiveProps(nextProps){
		nextProps.user !== this.props.user? 
				await	getUserProducts(this.props.user.uid): null
	}

	render() {
		const {user, userProducts, setProductStock} = this.props
		return <ProfileView 
			user={user} 
			userProducts={userProducts} 
			setProductStock={setProductStock}/>
	}
}  

const mapStateToProps = state => ({
	user : state.user,
	userProducts: state.userProducts
})

const mapDispatchToProps = {
	saveUser,
	saveUserPending,
	setProductStock
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Profile)
