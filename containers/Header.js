import React from 'react'
import Router from 'next/router'
import { Dropdown, Icon } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'
import Sidebar from 'react-sidebar';
import menu from '../asset/const/menu.json'
import { Item, Menu, MenuButton } from '../components/Styled'


class Header extends React.Component {

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
		return(
		<div className='header-container'>
			<MediaQuery minDeviceWidth={800} values={{deviceWidth: 1600}}>
				<Menu>
					{
						menu.map( ({link, text}, key) => <Item key={key} onClick={()=>Router.push(link)}>{text}</Item> )
					}
				</Menu>
			</MediaQuery>
			<MediaQuery  maxDeviceWidth={800}>
				<Sidebar sidebar={sidebarContent}
					open={this.state.sidebarOpen}
					onSetOpen={this.onSetSidebarOpen}
				>
					<div></div>
				</Sidebar>
				<MenuButton onClick={()=>this.onSetSidebarOpen(true)}><Icon name='content'/></MenuButton>
			</MediaQuery>
		</div>)
	
	}
}

const sidebarContent = 	<Menu>
<div>
{
	menu.map( ({link, text}, key) => <Item key={key} onClick={()=>Router.push(link)}>{text}</Item> )
}
</div>
</Menu>

export default Header
