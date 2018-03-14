import Router from 'next/router'
import MediaQuery from 'react-responsive'
import Nav from '../atoms/Nav'
import Menu from '../atoms/Menu'
import Item from '../atoms/Item'
import menu from '../../static/json/menu.json'
import { signOut } from '../../lib/handlers/authenticator'

export default ({loggedIn}) => 
<Nav>
	<Menu justifyContent={!loggedIn?'normal':'space-evenly'}>
		<img src="../../static/img/logo.png" width="50" height="50" />
		{loggedIn
		?	menu.filter(item => ['Log in', 'Register'].indexOf(item.text) === -1).map( ({link, text}, key) => 
			<Item key={key} onClick={()=>{link==='logout' ? signOut() :Router.push(link) }}>{text}</Item> 
		)
		: menu.slice(0,3).map( ({link, text}, key) => 
			<Item key={key} onClick={()=>Router.push(link)}>{text}</Item>
		)
		}
	</Menu>
</Nav>
