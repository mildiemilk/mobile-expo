import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Head from '../view/environment/DefaultHead'
import Header from '../view/environment/Header'
import store from '../lib/store'
import withRedux from "next-redux-wrapper"
import ProfileView from '../view/environment/Profile'
import { getUserProducts, setProductStock } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser, saveUserPending } from '../lib/actions/user'
import { getProfile, getTable } from '../lib/handlers/profile'
import { setOrderStatus } from '../lib/handlers/transaction'


class Profile extends Component {

	async componentDidMount() {
		const auth = await loadFirebase('auth')
		const user = await auth.onAuthStateChanged( user => {
			this.props.saveUserPending()
			return user ? this.props.saveUser(user) : null
		})
		this.props.user? this.props.user.uid ? getUserProducts(this.props.user.uid) : null : null
	
	}

	async componentWillReceiveProps(nextProps){
		if(nextProps.user !== this.props.user){
				await	getUserProducts(this.props.user.uid)
				await getProfile(this.props.user.uid)
		}		
		if(this.props.profile.transactionIds.length>=1 && (JSON.stringify(this.props.profile) !== JSON.stringify(nextProps.profile))){
			if(typeof this.props.profile.transactionIds[0] == "string") {
				getTable(this.props.profile.transactionIds)
			}
		}
		
	}

	render() {
		const {user, userProducts, profile, table} = this.props

		return <div>
			<Head/>
			<Header/>
				<ProfileView
					profile={profile}
					setOrderStatus={setOrderStatus}
					userUid={user.uid} 
					table={table}
					user={user} 
					userProducts={userProducts} 
					setProductStock={setProductStock}
				/>
			</div>
	}
}  

const mapStateToProps = state => ({
	user: state.user,
	userProducts: state.userProducts,
	profile: state.profile,
	table: state.profile.transactionIds,
})

const mapDispatchToProps = {
	saveUser,
	saveUserPending
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Profile)
