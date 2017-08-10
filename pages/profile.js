import React, { Component } from 'react'
import store from '../lib/store'
import withRedux from "next-redux-wrapper"
import { setUserProducts, setUserProductsPending } from '../lib/actions/product'
import ProfileView from '../containers/Profile'
import { getUserProducts, getUserProductsPending } from '../lib/handlers/product'
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
		return <ProfileView user={this.props.user} userProducts={this.props.userProducts} />
	}
}  

const mapStateToProps = state => ({
	user : state.user,
	userProducts: state.userProducts
})

const mapDispatchToProps = {
	saveUser,
	setUserProducts,
	saveUserPending,
	setUserProductsPending
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Profile)
