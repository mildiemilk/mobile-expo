import React, { Component } from 'react'
import store from '../lib/store'
import withRedux from "next-redux-wrapper"
import { setUserProducts } from '../lib/actions/product'
import ProfileView from '../containers/Profile'
import { getUserProducts, getUserProductsPending } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser } from '../lib/actions/user'


class Profile extends Component {
	async componentDidMount() {
		const auth = await loadFirebase('auth')
		await auth.onAuthStateChanged( fetchedUser => this.props.saveUser(fetchedUser)) 
		const { user } = this.props
		await getUserProducts(user.uid)
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
	saveUser
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Profile)