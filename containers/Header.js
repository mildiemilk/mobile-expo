import React from 'react'
import Link from 'next/link'
import { Menu, Dropdown, Button, Icon } from 'semantic-ui-react'
import MediaQuery from 'react-responsive'
import Sidebar from 'react-sidebar';

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
			<MediaQuery minDeviceWidth={1224} values={{deviceWidth: 1600}}>
				<Menu stackable>
					{
						menu.map( ({link, text}, key) => <Menu.Item key={key}><Link href={link}><a>{text}</a></Link></Menu.Item> )
					}
					<style jsx global>{`
							.ui.menu {
								font-size: calc(24px+1rem);
							}
							.header-container{
								margin-bottom: 15px;
							}
						`}
					</style>
				</Menu>
			</MediaQuery>
			<MediaQuery  maxWidth={1224}>
				<Sidebar sidebar={sidebarContent}
					open={this.state.sidebarOpen}
					onSetOpen={this.onSetSidebarOpen}>
					<div></div>
				</Sidebar>
				<Button basic onClick={()=>this.onSetSidebarOpen(true)}><Icon name='content'/></Button>
			</MediaQuery>
		</div>)
	
	}
}


const menu = [
	{
		link: '/',
		text:'Home'
	},
	{
		link: '/login',
		text:'Log in'
	},
	{
		link: '/register',
		text: 'Register'
	},
	{
		link:'/productRegister',
		text: 'Product Register'
	},
	{
		link:'/profile',
		text:'Profile'
	},
	{
		link:'/checkout',
		text:'Check Out'
	},
	{
		link:'/payment',
		text:'Payment'
	},
	{
		link:'/about',
		text: 'About'
	},
	{
		link: '/product',
		text: 'Product'
	}
]

const sidebarContent = 	<Menu>
		<div>
		{
			menu.map( ({link, text}, key) => <Menu.Item key={key}><Link href={link}><a>{text}</a></Link></Menu.Item> )
		}
		<style jsx global>{`
					.ui.menu {
							font-size: 24px;
					}
				`}
		</style>
		</div>
</Menu>
export default Header
