import React from 'react'
import styled from 'styled-components'
import {Button} from 'semantic-ui-react'
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
					<Button basic size='tiny'>เพิ่มสต๊อก</Button>
			</Modal>
		)
	}
}

export default AddStocksButton
