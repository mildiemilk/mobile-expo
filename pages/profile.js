import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import withRedux from "next-redux-wrapper"
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import ProfileView from '../view/environment/Profile'
import { getUserProducts, setProductStock } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser, saveUserPending } from '../lib/actions/user'
<<<<<<< HEAD
import { getProfile, getTable, addProfileDetail, addProfileImage } from '../lib/handlers/profile'
=======
import { getUserbyUid } from '../lib/handlers/user'
import { getProfile, getTable } from '../lib/handlers/profile'
>>>>>>> master
import { setOrderStatus } from '../lib/handlers/transaction'
import Head from '../view/environment/DefaultHead'
import Header from '../view/environment/Header'
import store from '../lib/store'

class Profile extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			isEdit : false
		}
	}

	async componentDidMount() {
		const auth = await loadFirebase('auth')
		const user = await auth.onAuthStateChanged(user => {
			this.props.saveUserPending()
			getUserbyUid(user.uid);
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
	handleImageChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
			addProfileImage(file)
    };

    reader.readAsDataURL(file);
  }
	handleSave = async(detail) => {
		const userUid = this.props.user.uid
		const { profileImage } = this.props.profile
		const profileDetail = {...detail, profileImage}
		addProfileDetail(profileDetail, userUid)
		this.setState({isEdit:false})
		await getProfile(this.props.user.uid)
		await getTable(this.props.profile.transactionIds)
		
	}
	handleEdit = () => {
		this.setState({isEdit:true})
	}
	render() {
		const {user, userProducts, profile, table, detail} = this.props
		const {isEdit} = this.state
		return <div>
			<Head/>
			<Header/>
				<ProfileView
					handleImageChange={this.handleImageChange}
					profileImage={profile.profileImage}
					handleSave={() => this.handleSave(detail)}
					detail={detail}
					isEdit={isEdit}
					handleEdit={this.handleEdit}
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
<<<<<<< HEAD
}  
Profile = reduxForm({
	form:'profileDetail',
	enableReinitialize: true
})(Profile)

const selector = formValueSelector('profileDetail')
=======
}
>>>>>>> master

const mapStateToProps = state => ({
	initialValues: state.profile,
	user: state.user,
	userProducts: state.userProducts,
	profile: state.profile,
	detail: selector(state,'address', 'email', 'phone', 'image'),
	table: state.profile.transactionIds
})

const mapDispatchToProps = {
	saveUser,
	saveUserPending
}

export default withRedux(() => store, mapStateToProps, mapDispatchToProps)(Profile)
