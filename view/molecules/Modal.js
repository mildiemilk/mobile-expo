import React from 'react'
import Router from 'next/router'
import Button, { DivButton } from '../atoms/Button'
import WhiteDiv from '../atoms/WhiteDiv'
import BlackOut from '../atoms/BlackOut'
import Wrapper from '../atoms/Wrapper'
import DivForButton from '../atoms/TextAlign'
import MediaQuery from 'react-responsive'
import { Modal as SMTModal} from 'semantic-ui-react'

class Modal extends React.Component {
    render() {
        const { buttonText, children, context, padding, minWidth, height, minHeight, textButton, widthDesktop, maxWidthDesktop,action } = this.props
        return (
            <SMTModal trigger={children || <Button>modal</Button>} closeIcon>
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
                {textButton && <Button fullWidth onClick={this.handleButton}>{textButton}</Button>}
                <SMTModal.Actions>
                    {action}
                </SMTModal.Actions>
            </SMTModal>
        )
    }
}

export default Modal
