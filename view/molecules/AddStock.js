import React from 'react'
import styled from 'styled-components'
import InputText from '../atoms/InputText'
import Button from '../atoms/Button'

class AddStocks extends React.Component {

	constructor(props) {
		super(props);
		this.state = {addingStock: false}
	}

	render() {
		return (
		<div>
			{this.state.addingStock ? 
			<div>
			<InputText width="100px" placeholder="100"/><Button onClick={()=>this.setState({addingStock: !this.state.addingStock})}>Done</Button>
			</div>
			:
			<Button round={this.props.round} onClick={()=>this.setState({addingStock: !this.state.addingStock})}>Add Stock</Button>
			}
		</div>)
	}
}

export default AddStocks
