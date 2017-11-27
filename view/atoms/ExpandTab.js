import React from 'react'
import Button from '../atoms/Button'
import styled from 'styled-components'

const InnerWrapper = styled.div`
    transition: 0.5;
`

class ExpandTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: false}
    }
    render(){
        return(
            <div>
                <span onClick={()=>this.setState({display: !this.state.display})}>{this.props.controlComponent || "control component"}</span>
                {
                    this.state.display?
                    <InnerWrapper>{this.props.innerComponent || "inner tab"}</InnerWrapper> : null
                }
            </div>
        )
    }
}

export default ExpandTab