import React, { Component } from 'react'
import store from '../lib/store'
import withRedux from "next-redux-wrapper"
import { bindActionCreators } from 'redux'
import { saveUser } from '../lib/actions/user'
import { setUserProducts } from '../lib/actions/product'
import ProfileView from '../containers/Profile'
import { getUserProducts, getUserProductsPending } from '../lib/handlers/product'
import loadFirebase from '../lib/database'

class Profile extends Component {
	async componentDidMount() {
		const auth = await loadFirebase('auth')
		const { user, getUserProducts } = this.props
		await auth.onAuthStateChanged( user => this.props.saveUser(user)) 
		await getUserProducts(this.props.user.uid)
	}

	componentWillReceiveProps(nextProps) {
		nextProps.user.uid !== this.props.user.uid? 
		getUserProducts(nextProps.user.uid) :null
	}

	render() {
		return <ProfileView user={this.props.user} userProducts={this.props.userProducts} />
	}
}  

const mapStateToProps = state => ({
	user : state.user,
	userProducts: state.userProducts
})

const mapDispatchToProps = dispatch => 
	bindActionCreators({
		saveUser: saveUser,
		getUserProductsPending,
		getUserProducts
	}, dispatch)

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Profile)