import React from 'react'
import Button, {ButtonGroup} from '../atoms/Button'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'

class Multitab extends React.Component {
	constructor(props) {
		super(props)
		this.state= { display: 0}
	}

	changeDisplay(displayTab){
		this.setState({display: displayTab})
	}

	render(){
		return(
			<Wrapper maxWidth="400px" bigScreenWidth='max-content' minWidth='320px'>
			{this.props.tabs?
				<Flex center verticleCenter >
					<ButtonGroup>
						{
							this.props.tabs.map( 
								(tab, index) =>
									<Button key={index} margin='1px' buttonDisabled={index === this.state.display ? false:true} onClick={()=>this.changeDisplay(index)}>			
										{tab.buttonLabel}
									</Button>
							)
						}
					</ButtonGroup>
					<Wrapper width="100%"  boxShadow='none'>
						<div style={{minHeight:'320px'}}>
						{
							this.props.tabs[this.state.display].component
						}
						</div>
						{
							this.props.footer
						}
					</Wrapper>
				</Flex>
			:null 
			}
			</Wrapper>
		)
	}
}

export default Multitab
