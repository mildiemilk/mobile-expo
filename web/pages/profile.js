import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'
import withRedux from "next-redux-wrapper"
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import ProfileView from '../view/environment/Profile'
import { getUserProducts, setProductStock, setProductSponsor, getProductSponsor, getProductToSponsorTable, setProductActive, setProductMembership, deleteProduct } from '../lib/handlers/product'
import { getMemberByEmailsByEmail, saveRequestedByEmailUserMembership } from '../lib/handlers/member'
import loadFirebase from '../lib/database'
import { saveUser, saveUserPending } from '../lib/actions/user'
import { getProfile, getTable, addProfileDetail, addProfileImage } from '../lib/handlers/profile'
import { getUserbyUid } from '../lib/handlers/user'
import { setOrderStatus } from '../lib/handlers/transaction'
import Head from '../view/environment/DefaultHead'
import Header from '../view/environment/Header'
import Wrapper from '../view/atoms/Wrapper'
import store from '../lib/store'
import ProfileSide from '../view/molecules/ProfileSide'
import ProfileMobile from '../view/environment/ProfileMobile'
import ProfileDetail from '../view/environment/ProfileDetail'
import Button from '../view/atoms/Button';
import HeightDiv from '../view/atoms/HeightDiv'
import { setMembers } from '../lib/handlers/member'
import H3 from '../view/atoms/H3'
import login from './login'
import Router from 'next/router'

class Profile extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			isEdit : false,
			isItemCard : false,
			isVisible: true,
			isView: false,
			showView: '',
			isProfileMobile: false,
			isItemMobile: false,
			isTableMobile: false,
		}
	}

	async componentDidMount() {
		
		this.props.saveUserPending()
		const auth = await loadFirebase('auth')
		const user = await auth.onAuthStateChanged(user => 
			getUserbyUid(user.uid)
		)
		if(this.props.user) {
			await getUserProducts(this.props.user.uid)
			await getProductToSponsorTable(this.props.user.uid, this.props.user.email)
			await getProfile(this.props.user)
			await getMemberByEmailsByEmail(this.props.user.email)
		}
	}
	async componentWillReceiveProps(nextProps){
		if(this.props.user !== nextProps.user ){
			await getUserProducts(this.props.user.uid)
			await getProductToSponsorTable(this.props.user.uid, this.props.user.email)
			await getProfile(this.props.user)
			this.props.user.membership !== nextProps.user.membership?
				await setMembers(this.props.user.membership) : null
			this.props.user.email !== nextProps.user.email?
				await getMemberByEmailsByEmail(this.props.user.email) : null
		}
		if(this.props.profile.transactionIds !==undefined) {
			if(this.props.profile.transactionIds.length>=1 && (JSON.stringify(this.props.profile) !== JSON.stringify(nextProps.profile))){
				if(typeof this.props.profile.transactionIds[0] == "string") {
					getTable(this.props.profile.transactionIds)
				}
			}
		}
		if(nextProps.userProducts !== this.props.userProducts) {
			await getProductToSponsorTable(this.props.user.uid, this.props.user.email)
		}
	}
	toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible })

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
		await getProfile(this.props.user)
		await getTable(this.props.profile.transactionIds)
	}

	handleEdit = () => {
		this.setState({isEdit:true})
	}

	cancelEdit = () => {
		this.setState({isEdit:false})
	}

	handleClick = string => {
		this.setState({
			isView: false,
			showView: ''
		})
		const { isItemCard } = this.state
		if(string==="order") {
			this.setState({isItemCard:true})
		}
		else if(string==="table"){
			this.setState({isItemCard:false})
		}
	}
	handleProfileMobile = () => {
		this.setState({
			isProfileMobile: !this.state.isProfileMobile
		})
	}
	handleItemCard = () => {
		this.setState({
			isItemMobile: !this.state.isItemMobile
		})
	}
	handleTableMobile = () => {
		this.setState({
			isTableMobile: !this.state.isTableMobile
		})
	}
	handleClickView = name => this.setState({ isView: !this.state.isView, showView: name })
	countMembershipProducts = products => Object.keys(products).filter( key => products[key].isMembership ).length
	
	render() {
		const {props,state} = this
		const {userProducts, isUserMembership} = this.props
		const {isEdit, isItemCard, isVisible, showView, isView, isProfileMobile, isItemMobile, isTableMobile} = this.state
		const membershipProductsNumber = this.countMembershipProducts(userProducts)
		return <HeightDiv>
			<Head/>
			{props.user.uid?
			<Header 
				content={
					<ProfileSide 
						{...props}
						{...state}
						toggleVisibility={this.toggleVisibility}
						handleClick={this.handleClick}
						sideContent = {
							<ProfileDetail
								{...props}
								{...state}
								handleImageChange={this.handleImageChange}
								handleSave={() => this.handleSave(this.props.detail)}
								handleEdit={this.handleEdit}
								cancelEdit={this.cancelEdit}
							/>}
						content = {
							<ProfileView
							{...props}
							{...state}
							handleImageChange={this.handleImageChange}
							handleSave={() => this.handleSave(this.props.detail)}
							handleEdit={this.handleEdit}						
							handleClickView={this.handleClickView}
							setProductMembership={setProductMembership}
							setProductActive={setProductActive}
							deleteProduct={deleteProduct}
							setOrderStatus={setOrderStatus}
						/>}
					/>
				}
				contentMobile={<HeightDiv>
					{isProfileMobile&&
						<ProfileDetail
							{...props}
							{...state}
							handleProfileMobile={this.handleProfileMobile}
							handleImageChange={this.handleImageChange}
							handleSave={() => this.handleSave(this.props.detail)}
							handleEdit={this.handleEdit}
							setProductMembership={setProductMembership}
							setProductActive={setProductActive}
							cancelEdit={this.cancelEdit}
						/>
					}
					{isItemMobile || isTableMobile ?
							<ProfileView
								{...props}
								{...state}
								handleTableMobile={this.handleTableMobile}
								handleItemCard={this.handleItemCard}
								handleImageChange={this.handleImageChange}
								handleSave={() => this.handleSave(this.props.detail)}
								handleEdit={this.handleEdit}
								handleClickView={this.handleClickView}	
								setProductMembership={setProductMembership}	
								setProductActive={setProductActive}		
								deleteProduct={deleteProduct}										
							/>
						:null}
					{!isItemMobile&&!isProfileMobile&&!isTableMobile &&
						<ProfileMobile 
							{...props}
							{...state}
							handleProfileMobile={this.handleProfileMobile}
							handleItemCard={this.handleItemCard}
							handleTableMobile={this.handleTableMobile}
						/>
					}
				</HeightDiv>}
			/>:
			<Header
					content={
						<div>
							<H3>คุณต้อง
								<a href="#" onClick={()=>Router.push('/login')}>ล๊อกอิน</a>ก่อนใช้แอพ
							</H3>
						</div>
					}
			/>
			}
		</HeightDiv>
	}
}

Profile = reduxForm({
	form:'profile',
	enableReinitialize:true,
	keepDirtyOnReinitialize:true
})(Profile)

const selector = formValueSelector('profile')

const mapStateToProps = state => ({
	user: state.user,
	userProducts: state.userProducts,
	sponsorProducts: state.sponsorProducts,
	profile: state.profile,
	detail: selector(state,'name','address', 'email', 'phone', 'image'),
	userBankDetail: selector(state,'bankAccountName', 'bankAccountNumber','bankName', 'amount'),
	sponsorEmail: selector(state, 'sponsorEmail'),
	table: state.profile.transactionIds,
	isUserMembership: state.user.membership || false,
	userPending: state.user? state.user.pending : false,
	requestMembership: state.member.requestMembership,
	balance: state.user.wallet,
	userUid: state.user.uid,
	initialValues: state.profile
})

const mapDispatchToProps = {
	saveUser,
	saveUserPending
}

export default withRedux(() => store, mapStateToProps, mapDispatchToProps)(Profile)
