import React from 'react'
import Button from '../atoms/Button'
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
        const{ buttonText, children, context} = this.props
        return(
        <div>
            <div onClick={()=> this.setState({display:true})}>{children || <Button>modal</Button>}</div>
            <BlackOut display={this.state.display} >
                <WhiteDiv onClick={()=>{}}>
                    <Button onClick={()=> this.setState({display:false})} modalClose >x</Button>
                    <div style={{paddingTop:"30px"}}>
                        {context || 'put some context'}
                    </div>
                </WhiteDiv>
            </BlackOut>
        </div>
        )
    }
}

export default Modal
