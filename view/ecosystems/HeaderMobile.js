import Router from 'next/router'
import MediaQuery from 'react-responsive'
import Sidebar from 'react-sidebar'
import { Icon } from 'semantic-ui-react'
import MenuButton from '../atoms/MenuButton'
import Menu from '../atoms/Menu'
import Item from '../atoms/Item'
import menu from '../../static/json/menu.json'


class HeaderMobile extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }
  }


	onSetSidebarOpen = open => {
		this.setState({sidebarOpen: open});
	}

	render(){
		
		return (
			<MediaQuery  maxDeviceWidth={700}>
				<Sidebar sidebar={sidebarContent}
					open={this.state.sidebarOpen}
					onSetOpen={this.onSetSidebarOpen}
				>

				</Sidebar>
				<MenuButton onClick={()=>this.onSetSidebarOpen(true)}><Icon name='content'/></MenuButton>
			</MediaQuery>
		)
	}
}

const sidebarContent = 	
<Menu height="100%">
<img src="../../static/img/logo.png" width="50" height="50" />
	<div>
		{
			menu.map( ({link, text}, key) => <Item key={key} onClick={()=>Router.push(link)}>{text}</Item> )
		}
	</div>
</Menu>

export default HeaderMobile
