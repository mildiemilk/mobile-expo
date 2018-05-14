import React from 'react'
import Button from '../atoms/Button'
import { Modal as SMTModal} from 'semantic-ui-react'

class Modal extends React.Component {
	render() {
		const { children, context, action, open } = this.props
		return (
			<SMTModal open={open} trigger={children || <Button>modal</Button>} closeIcon>
				{context || 'put some context'}
				<SMTModal.Actions>
					{action}
				</SMTModal.Actions>
			</SMTModal>
		)
	}
}

export default Modal
