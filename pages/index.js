import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import HomeView from '../view/environment/Home'
import store from '../lib/store'
import { saveUser } from '../lib/actions/user'
import loadFirebase from '../lib/database'

class Home extends Component {

	static async getInitialProps (props) {
		const { query } = props;
		console.log('query', query)
	}

	async componentDidMount() {
			const auth = await loadFirebase('auth')
			await auth.onAuthStateChanged( user => {user? this.props.saveUser(user): null}) 
	}

	render() {
		return <HomeView />
	}
}

const mapDispatchToProps = {
	saveUser
}
export default withRedux(()=>store, null, mapDispatchToProps)(Home)
