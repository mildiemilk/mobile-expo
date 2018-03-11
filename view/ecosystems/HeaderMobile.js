import Router from 'next/router'
import MediaQuery from 'react-responsive'
import styled from 'styled-components'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'  
import MenuButton from '../atoms/MenuButton'
import Item from '../atoms/Item'
import menu from '../../static/json/menu.json'
import HeightDiv from '../atoms/HeightDiv'

const StylePusher = styled(Sidebar.Pusher)`
margin: 0px !important;
padding:0;
`
const StyleSegment = styled(Segment)`
margin: 0px !important;
padding: 0;
`
const StylePushable =styled(Sidebar.Pushable)`
margin: 0px !important
padding:0;
`
class HeaderMobile extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
			sidebarOpen: false,
			visible: false
    }
	}


  toggleVisibility = () => this.setState({ visible: !this.state.visible })
	sidebarContent = () => 	(
		<div height="100%">
		<img src="../../static/img/logo.png" width="50" height="50" />
			<div>
			{this.props.loggedIn
				?	menu.map( ({link, text}, key) => 
					<Menu.Item key={key} onClick={()=>Router.push(link)}>{text}</Menu.Item> 
				)
				: menu.slice(0,3).map( ({link, text}, key) => 
					<Menu.Item key={key} onClick={()=>Router.push(link)}>{text}</Menu.Item>
				)
				}
			</div>
		</div>
	)

	render(){
		const { loggedIn, content, contentMobile } = this.props
		const { visible } = this.state
		return (
			<HeightDiv>
				<MenuButton onClick={this.toggleVisibility}><Icon name='content'/></MenuButton>
				<StylePushable as={Segment}>
					<Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
						{this.sidebarContent()}
					</Sidebar>
					<StylePusher>
						<StyleSegment basic>
							{contentMobile||content}
						</StyleSegment>
					</StylePusher>
				</StylePushable>
			</HeightDiv>
		)
	}
}


export default HeaderMobile