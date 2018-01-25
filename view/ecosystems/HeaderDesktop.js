import Router from 'next/router'
import MediaQuery from 'react-responsive'
import Nav from '../atoms/Nav'
import Menu from '../atoms/Menu'
import Item from '../atoms/Item'
import menu from '../../static/json/menu.json'


export default () => 
<MediaQuery minDeviceWidth={800} values={{deviceWidth: 1600}}>
<Nav>
	<Menu>
		{
			menu.map( ({link, text}, key) => 
			{text==="logo"
			?<img src="../../static/img/logo.png" />
			:<Item key={key} onClick={()=>Router.push(link)}>{text}</Item>
			}
		)
		}
	</Menu>
</Nav>
</MediaQuery>
