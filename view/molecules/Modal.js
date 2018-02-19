import React from 'react'
import Button, { DivButton } from '../atoms/Button'
import WhiteDiv from '../atoms/WhiteDiv'
import BlackOut from '../atoms/BlackOut'
import Wrapper from '../atoms/Wrapper'
import MediaQuery from 'react-responsive'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { display: false }
    }

    closeModal() {
        this.setState({ display: false })
    }

    render() {
        const { buttonText, children, context, padding, minWidth, height, minHeight } = this.props
        return (
            <div>
                <div onClick={() => this.setState({ display: true })}>{children || <Button>modal</Button>}</div>
                <BlackOut display={this.state.display} height={height} minHeight={minHeight}>
                    <Wrapper className="wraper-modal">
                        <WhiteDiv padding={padding} minWidth={minWidth}>
                            <DivButton>
                                <Button onClick={() => this.setState({ display: false })} modalClose>x</Button>
                            </DivButton>
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
                        </WhiteDiv>
                    </Wrapper>
                </BlackOut>
            </div>
        )
    }
}

export default Modal
