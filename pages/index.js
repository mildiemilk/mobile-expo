import React, { Component } from 'react'
import withRedux from 'next-redux-wrapper'
import { bindActionCreators } from 'redux'
import HomeView from '../view/environment/Home'
import store from '../lib/store'
import { saveUser } from '../lib/actions/user'
import loadFirebase from '../lib/database'
import {reduxForm} from 'redux-form'
import {signinWithFacebook, signinWithGoogle, signOut, registerWithEmail, addUserToDatabaseAndStore} from '../lib/handlers/authenticator'

class Home extends Component {

	static async getInitialProps (props) {
		const { query } = props;
	}

	async componentDidMount() {
			const auth = await loadFirebase('auth')
			await auth.onAuthStateChanged( user => {user? this.props.saveUser(user): null}) 
	}

	render() {
		const {user, loginValues, pending} = this.props
		return <div>
			<HomeView 
                page="register"
                onClickFacebook={signinWithFacebook}
                onClickGoogle={signinWithGoogle}
                signOut={signOut}
                loggedIn={user.signedIn}
                formValue={loginValues}
                pending={pending}
                onSubmitEmail={registerWithEmail}
            />
			</div>
	}
}

Home = reduxForm({form: 'login'})(Home)

const mapStateToProps = state => ({
    loginValues: state.form.login
        ? state.form.login.values
        : null,
    pending: state.user ? state.user.pending : false,
    user: state.user
})

const mapDispatchToProps = {
    saveUser
}

export default withRedux(()=>store, mapStateToProps, mapDispatchToProps)(Home)
