import React from 'react'
import { Grid } from 'semantic-ui-react'
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
			<div>
				<Wrapper bigScreenWidth='max-content' minWidth='320px' padding='0' margin='0'>
				{this.props.tabs?
					<Flex center verticleCenter margin='0' padding='0' >
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
			</div>
		)
	}
}

export default Multitab
