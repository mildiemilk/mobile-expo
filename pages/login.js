import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import loadFirebase from '../lib/database'
import LoginForm from '../view/environment/AuthForm'
import { signinWithFacebook, signinWithGoogle, signOut, signInWithEmail} from '../lib/handlers/authenticator'
import { saveUser } from '../lib/actions/user'
import { validateEmail, validatePassword } from '../helpers/formvalidation'

class Login extends React.Component {
    async componentDidMount() {
        const auth = await loadFirebase('auth')
        await auth.onAuthStateChanged( user => {user? this.props.saveUser(user): null}) 
    }

    render() {
        const { user, loginValues } = this.props
        let validateEmailResult = validateEmail(loginValues ? loginValues.email : null)
        let validatePasswordResult = validatePassword(loginValues ? loginValues.password : null)
        let statusArray = [validateEmailResult.status, validatePasswordResult.status]
        let status = statusArray.indexOf('error') > 0 ? 'error' : statusArray.indexOf('warning') > 0 ? 'warning' : 'success'
        return (
            <LoginForm 
                page="login" 
                onClickFacebook={signinWithFacebook} 
                onClickGoogle={signinWithGoogle}
                signOut={signOut}
                loggedIn={user.signedIn}
                onSubmitEmail={signInWithEmail}
                formValue={loginValues}
                status={status}
                helperText={[ ...validateEmailResult.errorText, ...validatePasswordResult.errorText]}
            />
        )
    }
}
Login = reduxForm({
    form: 'login'
})(Login)

const mapStateToProps = state => ({
    loginValues : state.form.login ? state.form.login.values : null,
    user: state.user
})

const mapDispatchToProps = {
	saveUser
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Login)
