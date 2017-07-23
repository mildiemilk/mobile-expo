import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from "next-redux-wrapper"
import { reduxForm } from 'redux-form'
import RegisterView from '../containers/AuthForm'
import store from '../lib/store'
import { registerSuccess, registerPending,registerFailed } from '../lib/actions/user'
import { registerWithEmail, signinWithFacebook, signinWithGoogle } from '../lib/handlers/authenticator'

let Register = ({register, registerSuccess, registerPending, registerFailed, user, clearError}) => 
<RegisterView 
	onSubmit={() => registerWithEmail(
		{
			email: register.values.email, 
			password: register.values.password,
			registerSuccess: registerSuccess,
			registerPending: registerPending,
			registerFailed: registerFailed
		}
	)}
	onClickGoogle={()=> signinWithGoogle()}
	onClickFacebook={()=>signinWithFacebook()}
	error={user.error}
	clearError={clearError}
	formValue={register}
/>

Register = reduxForm({
	form: 'register'
})(Register)

const mapStateToProps = state => ({
	register: state.form.register,
	user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
	registerSuccess,
	registerPending,
	registerFailed
}, dispatch)

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Register)