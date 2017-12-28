import React from 'react'
import Button, {DivButton} from '../atoms/Button'
import WhiteDiv from '../atoms/WhiteDiv'
import BlackOut from '../atoms/BlackOut'

class Modal extends React.Component {
    constructor(props) {
    super(props);
    this.state = {display: false}
    }

    closeModal(){
        this.setState({display: false})
    }

    render() {
        const{ buttonText, children, context, padding, minWidth, height, minHeight} = this.props
        return(
        <div>
            <div onClick={()=> this.setState({display:true})}>{children || <Button>modal</Button>}</div>
            <BlackOut display={this.state.display} height={height} minHeight={minHeight}>
                <WhiteDiv padding={padding} minWidth={minWidth}>
                    <DivButton>
                        <Button onClick={()=> this.setState({display:false})} modalClose>x</Button>
                    </DivButton>
                    
                    <div style={{padding:"0px 10px 30px 10px"}}>
                        {context || 'put some context'}
                    </div>
                </WhiteDiv>
            </BlackOut>
        </div>
        )
    }
}

export default Modal
