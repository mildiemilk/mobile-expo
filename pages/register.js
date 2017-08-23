import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import loadFirebase from '../lib/database'
import LoginForm from '../containers/AuthForm'
import { signinWithFacebook, signinWithGoogle, signOut} from '../lib/handlers/authenticator'
import { saveUser } from '../lib/actions/user'

class Login extends React.Component {
    async componentDidMount() {
        const auth = await loadFirebase('auth')
        await auth.onAuthStateChanged( user => {user? this.props.saveUser(user): null}) 
    }

    render() {
        const { user, loginValues } = this.props
        return (
            <LoginForm 
                page="register" 
                onClickFacebook={signinWithFacebook} 
                onClickGoogle={signinWithGoogle}
                signOut={signOut}
                loggedIn={user.signedIn}
								formValue={loginValues}
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
