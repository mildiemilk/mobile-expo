import React from 'react'
import Button from '../atoms/Button'
import Wrapper from '../atoms/Wrapper'
import Flex from '../atoms/Flex'
import styled from 'styled-components'
import color from '../../static/json/color.json'

const Input = styled.input`
	width: -webkit-fill-available;
	margin: 1%;
	padding: 5px;
	width
	color: ${color.darkText};
	border-left: 1px solid ${color.lightPrimary};
	border-bottom: 1px solid ${color.lightPrimary};
	border-top: 1px solid #f1f1f1;
	border-radius: 2px;
	outline: none;
	${props => props.width? 'width:'+props.width +';' : null}
	&:focus{
		box-shadow: -1px 1px 2px ${color.lightPrimary};
		border: 1px solid ${color.lightPrimary};
	}
	&:not:focus{
		padding-top:2px;
	}
	&::placeholder {
		color: #a8a8a8;
	}
`

class AddStockInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			stock: this.props.currentStock
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({stock: event.target.value});
	}
	
	render(){
		return(
			<Flex center verticleCenter>
				<h3>Add Stock </h3>
				<Input width="100px" value={this.state.stock} onChange={this.handleChange}/>
				<Button onClick={()=>this.props.setProductStock(this.props.productKey, this.state.stock)}>Add</Button>
			</Flex>
		)

	}
}

export default AddStockInput
