import React, { Component } from 'react'
import store from '../lib/store'
import withRedux from "next-redux-wrapper"
import ProfileView from '../view/environment/Profile'
import { getUserProducts, setProductStock } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser, saveUserPending } from '../lib/actions/user'
import { getUserbyUid } from '../lib/handlers/user'


class Profile extends Component {

	async componentDidMount() {
		const auth = await loadFirebase('auth')
		const user = await auth.onAuthStateChanged(user => {
			this.props.saveUserPending()
			getUserbyUid(user.uid);
			return user ? this.props.saveUser(user) : null
		})
		this.props.user ? this.props.user.uid ? getUserProducts(this.props.user.uid) : null : null;
		this.props.user ? this.props.user.uid ? getUserbyUid(this.props.user.uid) : null : null;
	}

	async componentWillReceiveProps(nextProps) {
		nextProps.user !== this.props.user ?
			await getUserProducts(this.props.user.uid) : null;
	}

	render() {
		const { user, userProducts } = this.props
		return <ProfileView
			user={user}
			userProducts={userProducts}
			setProductStock={setProductStock} />
	}
}

const mapStateToProps = state => ({
	user: state.user,
	userProducts: state.userProducts
})

const mapDispatchToProps = {
	saveUser,
	saveUserPending
}

export default withRedux(() => store, mapStateToProps, mapDispatchToProps)(Profile)
