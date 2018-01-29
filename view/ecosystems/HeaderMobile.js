import Router from 'next/router'
import Sidebar from 'react-sidebar'
import { Icon } from 'semantic-ui-react'
import MenuButton from '../atoms/MenuButton'
import Menu from '../atoms/Menu'
import Item from '../atoms/Item'
import menu from '../../static/json/menu.json'
import BaseFlex from '../atoms/Flex'
import styled from 'styled-components'
import color from '../../static/json/color.json'

const Flex = BaseFlex.extend`
	position:absolute;
	top:0;
	z-index:100;
	width: 100%;
	background: ${color.primary1};
	display:${props=>props.open? 'flex': 'none'};
	transition: 0.3s;
`

const SmallScreenOnly = styled.div`
	@media (min-width: 700px){
		display: none;
	}
`

const CloseButton = styled.span`
	color: white;
	font-size:1.2rem;
`

class HeaderMobile extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      sidebarState: false
    }
  }


	onSetSidebarOpen = state => {
		this.setState({sidebarState: state});
	}

	render(){
		
		return (
			<SmallScreenOnly>
				<div style={{fontSize:"3em", color:color.contrastHighlight, marginLeft:"10px", marginTop:"10px"}} onClick={()=>this.onSetSidebarOpen(true)}>
					<i class="fas fa-bars"></i>
				</div>
				<Flex open={this.state.sidebarState}>
				<CloseButton onClick={()=>this.onSetSidebarOpen(false)}>x</CloseButton>
				{
					menu.map( ({link, text}, key) => <Item 
						key={key} 
						onClick={()=>{
							this.onSetSidebarOpen(false)
							Router.push(link)}
						}
					>
						{text}
					</Item> 
					)
				}
				</Flex>
			</SmallScreenOnly>
		)
	}
}

export default HeaderMobile
