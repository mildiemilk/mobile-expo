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
			<Wrapper width='max-content' bigScreenWidth='max-content'>
			{this.props.tabs?
				<Flex center verticleCenter >
					<ButtonGroup>
						{
							this.props.tabs.map( 
								(tab, index) =>
									<Button key={index} margin='1px' onClick={()=>this.changeDisplay(index)}>{tab.buttonLabal}{index}</Button>
							)
						}
					</ButtonGroup>
					<div>
						{
							this.props.tabs[this.state.display].component
						}
					</div>
				</Flex>
			:null 
			}
			</Wrapper>
		)
	}
}

export default Multitab
