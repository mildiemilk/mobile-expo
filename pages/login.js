import React from 'react'
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import withRedux from "next-redux-wrapper"
import store from '../lib/store'
import loadFirebase from '../lib/database'
import { saveUser } from '../lib/actions/user'
import LoginForm from '../containers/AuthForm'
import { signinWithFacebook, signinWithGoogle, signOut} from '../lib/handlers/authenticator'

class Login extends React.Component {
    async componentDidMount() {
		const auth = await loadFirebase('auth')
		const { user, getUserProducts } = this.props
	}

    render() {
        return (
            <LoginForm 
                page="login" 
                onClickFacebook={signinWithFacebook} 
                onClickGoogle={signinWithGoogle}
                signOut={signOut}
            />
        )
    }
}
Login = reduxForm({
    form: 'login'
})(Login)

const mapStateToProps = state => ({
    loginValues : state.form.login ? state.form.login.values : null
})

const mapDispatchToProps = dispatch =>
bindActionCreators({
    saveUser
}, dispatch)

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Login)