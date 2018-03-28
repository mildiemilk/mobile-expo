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
		const { setProductStock, productKey, stock } = this.props
		return (
			<Modal 
				context={<AddStocksInput setProductStock={setProductStock} productKey={productKey} currentStock={stock}/>}
			>
					<Button fullWidth secondary>Add Stock</Button>
			</Modal>
		)
	}
}

export default AddStocksButton
