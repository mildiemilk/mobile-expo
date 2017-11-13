import React from 'react'
import InputText from '../atoms/TextField'
import Button from '../atoms/Button'
import Flex from '../atoms/Flex'
import H3 from '../atoms/H3'

class BalancePanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {disputing: false}
	}

	render(){
		return <Flex bigScreenWidth="150px">
		<p>Balance: {this.props.balance}</p>
		<Button onClick={()=> this.setState({disputing: !this.state.disputing})}> {this.state.disputing? 'Cancel': 'Dispute'} </Button>
		{this.state.disputing? <div><InputText/><Button onClick={()=> this.setState({disputing: !this.state.disputing})}>Dispute</Button></div>:null}
	</Flex>
	}
}   

export default BalancePanel
