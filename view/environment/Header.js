import React from 'react'
import { saveUser } from '../../lib/actions/user'
import withRedux from "next-redux-wrapper"
import MediaQuery from 'react-responsive'
import store from '../../lib/store'
import loadFirebase from '../../lib/database'
import HeaderDesktop from '../ecosystems/HeaderDesktop'
import HeaderMobile from '../ecosystems/HeaderMobile'
import HeightDiv from '../atoms/HeightDiv'

class Header extends React.Component {
	async componentDidMount() {
		const auth = await loadFirebase('auth')
		await auth.onAuthStateChanged( user => {user? this.props.saveUser(user): null}) 
  }
	render(){
		const { user, content, contentMobile } = this.props
		return(
		<HeightDiv>
			<MediaQuery minDeviceWidth={1224}>
				<HeaderDesktop loggedIn={user}/>
				{content}
			</MediaQuery>
			<HeaderMobile loggedIn={user} content={content} contentMobile={contentMobile}/>
		</HeightDiv>)
	}
}


const mapStateToProps = state => ({
    user: state.user.signedIn
})

const mapDispatchToProps = {
	saveUser
}

export default withRedux(()=>store,mapStateToProps, mapDispatchToProps)(Header)

