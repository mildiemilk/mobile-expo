import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'
import withRedux from "next-redux-wrapper"
import { reduxForm, formValues, formValueSelector } from 'redux-form'
import ProfileView from '../view/environment/Profile'
import { getUserProducts, setProductStock, setProductSponsor, getProductSponsor, getProductToSponsorTable, setProductActive } from '../lib/handlers/product'
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

class Profile extends Component {
	
	constructor(props){
		super(props)
		this.state = {
			isEdit : false,
			isItemCard : false,
			isVisible: true,
			isView: false,
			showView: '', // first , second
			isProfileMobile: false,
			isItemMobile: false,
			isTableMobile: false
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
		await getProfile(this.props.user.uid)
		await getTable(this.props.profile.transactionIds)
	}
	handleEdit = () => {
		this.setState({isEdit:true})
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

	render() {
		const {user, userProducts, profile, table, detail, sponsorEmail, sponsorProducts} = this.props
		const {isEdit, isItemCard, isVisible, showView, isView, isProfileMobile, isItemMobile, isTableMobile} = this.state
		return <div>
			<Head/>
			<Header />
			<MediaQuery  minDeviceWidth={1224}>
				<ProfileSide sideContent = {
					<ProfileDetail
						profileImage={profile.profileImage}
						handleImageChange={this.handleImageChange}
						handleSave={() => this.handleSave(detail)}
						detail={detail}
						isEdit={isEdit}
						profile={profile}
						handleEdit={this.handleEdit}
						balance={user.wallet}
						userUid={user.uid}
					/>}
					content = {
						<ProfileView
						isItemCard={isItemCard}
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
						sponsorProducts={sponsorProducts}
						setProductStock={setProductStock}
						setProductSponsor={setProductSponsor}
						getProductSponsor={getProductSponsor}
						sponsorEmail={sponsorEmail}
						setProductActive={setProductActive}
						isView={isView}
						showView={showView}
						handleClickView={this.handleClickView}
					/>}
					isVisible={isVisible}
					toggleVisibility={this.toggleVisibility}
					table={table}
					userUid={user.uid}
					handleClick={this.handleClick}
				/>
			</MediaQuery>
			<MediaQuery  maxDeviceWidth={1224}>
				{isProfileMobile&&
				<div>
						<Wrapper height="100%" widthSmall="100vw" noMargin noBorder>
							<ProfileDetail
								profileImage={profile.profileImage}
								handleImageChange={this.handleImageChange}
								handleSave={() => this.handleSave(detail)}
								detail={detail}
								isEdit={isEdit}
								profile={profile}
								handleEdit={this.handleEdit}
								balance={user.wallet}
								userUid={user.uid}
							/>
						</Wrapper>
						<Button onClick={this.handleProfileMobile} margin="10px 0px">Back</Button>
				</div>
				}
				{isItemMobile || isTableMobile 
				?<div>
					<ProfileView
						handleTableMobile={this.handleTableMobile}
						handleItemCard={this.handleItemCard}
						isItemCard={isItemCard}
						isTableMobile={isTableMobile}
						isItemMobile={isItemMobile}
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
						sponsorProducts={sponsorProducts}
						setProductStock={setProductStock}
						setProductSponsor={setProductSponsor}
						getProductSponsor={getProductSponsor}
						sponsorEmail={sponsorEmail}
						setProductActive={setProductActive}
						isView={isView}
						showView={showView}
						handleClickView={this.handleClickView}
					/>
				</div>: null}
				{!isItemMobile&&!isProfileMobile&&!isTableMobile
				?<ProfileMobile 
					handleProfileMobile={this.handleProfileMobile}
					handleItemCard={this.handleItemCard}
					handleTableMobile={this.handleTableMobile}
				/>
				:null
				}
				
			</MediaQuery>
			
			</div>
	}
}
{/* <ProfileMobile handleProfileMobile={this.handleProfileMobile}/> */}
Profile = reduxForm({
	form:'profileDetail',
	enableReinitialize: true
})(Profile)

const selector = formValueSelector('profileDetail')

const mapStateToProps = state => ({
	initialValues: state.profile,
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
