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

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }


	onSetSidebarOpen(open) {
		this.setState({sidebarOpen: open});
	}

	render(){
		
		return (
			<MediaQuery  maxDeviceWidth={800}>
				<Sidebar sidebar={sidebarContent}
					open={this.state.sidebarOpen}
					onSetOpen={this.onSetSidebarOpen}
				>
					<div></div>
				</Sidebar>
				<MenuButton onClick={()=>this.onSetSidebarOpen(true)}><Icon name='content'/></MenuButton>
			</MediaQuery>
		)
	}
}

const sidebarContent = 	
<Menu>
	<div>
		{
			menu.map( ({link, text}, key) => <Item key={key} onClick={()=>Router.push(link)}>{text}</Item> )
		}
	</div>
</Menu>

export default HeaderMobile
