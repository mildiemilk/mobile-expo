import React from 'react'
import Button from '../atoms/Button'
import styled from 'styled-components'

const InnerWrapper = styled.div`
    transition: 0.5;
`

const OuterWrapper = styled.div`
width: -webkit-fill-available;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

class ExpandTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: false}
    }
    render(){
        return(
            <OuterWrapper>
                <OuterWrapper onClick={()=>this.setState({display: !this.state.display})}>{this.props.controlComponent || "control component"}</OuterWrapper>
                {
                    this.state.display?
                    <InnerWrapper>{this.props.innerComponent || "inner tab"}</InnerWrapper> : null
                }
            </OuterWrapper>
        )
    }
}

export default ExpandTab