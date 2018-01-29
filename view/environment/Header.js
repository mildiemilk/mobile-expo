import React from 'react'
import HeaderDesktop from '../ecosystems/HeaderDesktop'
import HeaderMobile from '../ecosystems/HeaderMobile'


class Header extends React.Component {
	render(){
		return(
		<div>
			<HeaderDesktop/>
			<HeaderMobile/>
		</div>)
	
	}
}



export default Header
