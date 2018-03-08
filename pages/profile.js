import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import withRedux from "next-redux-wrapper"
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import ProfileView from '../view/environment/Profile'
import { getUserProducts, setProductStock, setProductSponsor, getProductSponsor, getProductToSponsorTable, setProductActive, setProductMembership } from '../lib/handlers/product'
import loadFirebase from '../lib/database'
import { saveUser, saveUserPending } from '../lib/actions/user'
import { getProfile, getTable, addProfileDetail, addProfileImage } from '../lib/handlers/profile'
import { getUserbyUid } from '../lib/handlers/user'
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
		this.props.user? this.props.user.uid ? getProductToSponsorTable(this.props.user.uid, this.props.user.email) : null : null
	
	}

	async componentWillReceiveProps(nextProps){
		if(nextProps.user !== this.props.user){
				await	getUserProducts(this.props.user.uid)
				await getProductToSponsorTable(this.props.user.uid, this.props.user.email)
				await getProfile(this.props.user.uid)
		}		
		if(this.props.profile.transactionIds.length>=1 && (JSON.stringify(this.props.profile) !== JSON.stringify(nextProps.profile))){
			if(typeof this.props.profile.transactionIds[0] == "string") {
				getTable(this.props.profile.transactionIds)
			}
		}
		if(nextProps.userProducts !== this.props.userProducts) {
			await getProductToSponsorTable(this.props.user.uid, this.props.user.email)
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

		const {isEdit} = this.state
		return <div>
			<Head/>
			<Header/>
				<ProfileView
					{...this.props}
					setProductActive={setProductActive}
					setProductMembership={setProductMembership}
					handleImageChange={this.handleImageChange}
					profileImage={this.props.profile.profileImage}
					handleSave={() => this.handleSave(detail)}
					handleEdit={this.handleEdit}
					isEdit={isEdit}
				/>
			</div>
	}
}  
Profile = reduxForm({
	form:'profileDetail'
})(Profile)

const selector = formValueSelector('profileDetail')

const mapStateToProps = state => ({
	user: state.user,
	userProducts: state.userProducts,
	sponsorProducts: state.sponsorProducts,
	profile: state.profile,
	detail: selector(state,'address', 'email', 'phone', 'image'),
	sponsorEmail: selector(state, 'sponsorEmail'),
	table: state.profile.transactionIds
})

const mapDispatchToProps = {
	saveUser,
	saveUserPending
}

export default withRedux(() => store, mapStateToProps, mapDispatchToProps)(Profile)
