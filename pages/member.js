import React from 'react'
import { reduxForm, formValueSelector } from 'redux-form'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import MemberView from '../view/environment/Member'
import LoginForm from '../view/environment/AuthForm'
import { signinWithFacebook, signinWithGoogle, signOut, signInWithEmail} from '../lib/handlers/authenticator'
import { getProfile } from '../lib/handlers/profile'
import { saveUser, saveUserPending } from '../lib/actions/user'
import loadFirebase from '../lib/database'
import { getUserbyUid } from '../lib/handlers/user'
import { saveMembership, 
	regexKey, 
	loginMembership, 
	setMembers, 
	setMemberPermission, 
	addMemberByEmail, 
	getMemberByEmailsByMembership, 
	getAllMemberships, 
	removeUserMembership, 
	setNewMembershipPassword } from '../lib/handlers/member'
import { setMembershipProducts } from '../lib/handlers/product'
import { validateKey } from '../lib/actions/member'
import { setChosenMembership, resetMembershipSuccess } from '../lib/actions/memberships'

class Member extends React.Component {

	async componentDidMount() {
		const auth = await loadFirebase('auth')
		const user = await auth.onAuthStateChanged(async user => {
			this.props.saveUserPending()
			await getUserbyUid(user.uid)
			user ? this.props.saveUser(user) : null
		})
		resetMembershipSuccess()
		getAllMemberships()
	}

	async componentWillReceiveProps(nextProps){
		await getUserbyUid(this.props.user.uid)
		if(nextProps.user !== this.props.user){
			await getProfile(this.props.user.uid)
		}
		if(nextProps.user.membership !== this.props.user.membership){
			await setMembers(this.props.user.membership)
			await getMemberByEmailsByMembership(this.props.user.membership)
		}		
		nextProps.name !== this.props.name ?
			this.props.validateKey(RegExp(/[^a-z|A-Z|\s|[0-9]/g).exec(nextProps.name) === null): null
	}

	render() {
		const { member, user } = this.props
		return (
			<MemberView 
				{...this.props} 
				addMemberByEmail={addMemberByEmail}
				saveMembership={saveMembership} 
				loginMembership={loginMembership} 
				isAdmin={member&&Object.keys(member.members).length > 0 && member.members[user.uid]? member.members[user.uid].permission==="admin" : null}
				setMemberPermission={setMemberPermission}
				removeUserMembership={removeUserMembership}
				setNewMembershipPassword={setNewMembershipPassword}
			/>
		)
	}
}
Member = reduxForm({
	form: 'member'
})(Member)

const selector = formValueSelector('member')

const mapStateToProps = state => ({
	member: state.member,
	user: state.user,
	profile: state.profile,
	name: selector(state,'name'),
	passwordconfirmationLength: selector(state,'passwordconfirmation') ? selector(state,'passwordconfirmation').length : 0,
	passwordLength: selector(state,'password')? selector(state,'password').length: 0,
	passwordMatch: selector(state,'password') === selector(state,'passwordconfirmation'),
	password: selector(state,'password'),
	keyIsValid: state.member.keyIsValid,
	newMembershipEmail: selector(state,'newMemberEmail'),
	allMemberships: state.memberships.memberships,
	chosenMembership: state.memberships.chosenMembership,
	signinMembershipSuccess: state.memberships.success
})

const mapDispatchToProps = {
	saveUserPending,
	saveUser,
	validateKey,
	setChosenMembership,
	resetMembershipSuccess
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Member)
