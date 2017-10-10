import Router from 'next/router'
import MediaQuery from 'react-responsive'
import Menu from '../atoms/Menu'
import Item from '../atoms/Item'
import menu from '../../static/json/menu.json'


export default () => 
<MediaQuery minDeviceWidth={800} values={{deviceWidth: 1600}}>
	<Menu>
		{
			menu.map( ({link, text}, key) => <Item key={key} onClick={()=>Router.push(link)}>{text}</Item> )
		}
	</Menu>
</MediaQuery>
