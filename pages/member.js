import React from 'react'
import { reduxForm } from 'redux-form'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import MemberView from '../view/environment/Member'
import LoginForm from '../view/environment/AuthForm'
import { registerMember, signinMember } from '../lib/actions/member'
import { signinWithFacebook, signinWithGoogle, signOut, signInWithEmail} from '../lib/handlers/authenticator'

class Member extends React.Component {

	render() {
		return (
			user.loggedIn?
			<MemberView {...this.props}/>
		)
	}
}
Member = reduxForm({
	form: 'member'
})(Member)

const mapStateToProps = state => ({
	member: state.member,
	user: state.user
})

const mapDispatchToProps = {
	registerMember,
	signinMember
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Member)
