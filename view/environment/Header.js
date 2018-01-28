import React from 'react'
import menu from '../../static/json/menu.json'

import HeaderDesktop from '../ecosystems/HeaderDesktop'
import HeaderMobile from '../ecosystems/HeaderMobile'


class Header extends React.Component {
	render(){
		return(
		<div>
			<HeaderDesktop/>
		</div>)
	
	}
}



export default Header
