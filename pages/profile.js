import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import Head from '../view/environment/DefaultHead'
import Header from '../view/environment/Header'
import store from '../lib/store'
import withRedux from "next-redux-wrapper"
import ProfileView from '../view/environment/Profile'
import ProfileTable from '../view/environment/ProfileTable'
import ProfileDetail from '../view/environment/ProfileDetail'
import { getUserProducts, setProductStock } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser, saveUserPending } from '../lib/actions/user'
import { getProfile, getTable } from '../lib/handlers/profile'
import { setOrderStatus } from '../lib/handlers/transaction'


class Profile extends Component {
	constructor(props){
		super(props)
		this.state = {
			table: []
		}
	}
	
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
		// if(JSON.stringify(profile) !== JSON.stringify(nextProps.profile) ){
		// 		getTable(profile.transactionIds)
		// 		console.log('willRecieve===>', nextProps.profile)
		// }
		// console.log('New', nextProps.table)
		const {table} = this.state
		if(nextProps.table !== undefined && nextProps.table.length>=1) {
			if(table.length<1){
				this.setState({table: nextProps.table})
			}
			else if(nextProps.table.length>=1){
				const A = table?table.filter(item => nextProps.table.map(e => e.status !== item.status).indexOf(true) !== -1):null
				console.log('A props', A, nextProps.table, table)
				if(A) {
					this.setState({table: nextProps.table})
				}		
			}	
		}
	}

	render() {
		const {user, userProducts, profile} = this.props
		const {table} = this.state

		return <div>
			<Head/>
			<Header/>
			<Grid>
				<Grid.Column width={4}>
					<ProfileDetail
						user={profile}
					/>
				</Grid.Column>
				<Grid.Column width={10}>
					<ProfileTable
						table={table}
						userUid={user.uid}
						setOrderStatus={setOrderStatus}
					/>
					<ProfileView 
						user={user} 
						userProducts={userProducts} 
						setProductStock={setProductStock}/>
				</Grid.Column>
			</Grid>
			</div>
	}
}  

const mapStateToProps = state => ({
	user : state.user,
	userProducts: state.userProducts,
	profile: state.profile,
	table: state.profile.transactionIds,
})

const mapDispatchToProps = {
	saveUser,
	saveUserPending,
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Profile)
