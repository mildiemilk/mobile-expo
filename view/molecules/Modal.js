import React from 'react'
import Button from '../atoms/Button'
import MediaQuery from 'react-responsive'
import { Modal as SMTModal} from 'semantic-ui-react'

class Modal extends React.Component {
	render() {
		const { children, context, action, open } = this.props
		return (
			<SMTModal open={open} trigger={children || <Button>modal</Button>} closeIcon>
				<MediaQuery maxDeviceWidth={700}>
					<div style={{ padding: "0px 5px 15px 5px" }}>
						{context || 'put some context'}
					</div>
				</MediaQuery>
				<MediaQuery minDeviceWidth={701}>
					<div style={{ padding: "0px 10px 30px 10px" }}>
						{context || 'put some context'}
					</div>
				</MediaQuery>
				<SMTModal.Actions>
					{action}
				</SMTModal.Actions>
			</SMTModal>
		)
	}
}

export default Modal
