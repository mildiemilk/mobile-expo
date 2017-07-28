import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import HomeView from '../containers/Home'
import store from '../lib/store'
import { saveUser } from '../lib/actions/user'
import loadFirebase from '../lib/database'

class Home extends Component {

	async componentDidMount() {
		const auth = await loadFirebase('auth')
		const { user, getUserProducts } = this.props
		await auth.onAuthStateChanged( user => this.props.saveUser(user)) 
	}

	render() {
		return <HomeView />
	}
}

const mapDispatchToProps = {
	saveUser
}
export default withRedux(()=>store, null, mapDispatchToProps)(Home)