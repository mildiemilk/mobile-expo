import React from 'react'
import styled from 'styled-components'
import Button from '../atoms/Button'
import Modal from './Modal'
import AddStocksInput from './AddStocksInput'


class AddStocksButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {addingStock: false}
	}

	render() {
		const { addStock, productID, currentStock } = this.props
		return (
			<Modal 
				context={<AddStocksInput handleSubmit={()=>console.log('click')} />}
			>
					<Button onClick={addStock}>Add Stock</Button>
			</Modal>
		)
	}
}

export default AddStocksButton
