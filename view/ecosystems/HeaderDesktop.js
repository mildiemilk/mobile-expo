import Router from 'next/router'
import MediaQuery from 'react-responsive'
import Nav from '../atoms/Nav'
import Menu from '../atoms/Menu'
import Item from '../atoms/Item'
import menu from '../../static/json/menu.json'

export default () => 
<Nav>
	<Menu>
		<img src="../../static/img/logo.png" width="50" height="50" />
		{
			menu.map( ({link, text}, key) => <Item key={key} onClick={()=>Router.push(link)}>{text}</Item> )
		}
	</Menu>
</Nav>
