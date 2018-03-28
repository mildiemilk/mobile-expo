import styled from 'styled-components'
import Field from 'redux-form'
import Button from '../atoms/Button'
import { Component } from 'react'
import color from '../../static/json/color.json'
import Option from '../atoms/Option'
import Flex from '../atoms/Flex'
import store from '../../lib/store'
import { change } from 'redux-form'

const Triangle = styled.span`
margin-top:2px;
position: absolute;
right: 4px;
width: 0; 
height: 0; 
border-left: 6px solid transparent;
border-right: 6px solid transparent;
border-top: 10px solid ${color.lightPrimary};
`

class Select extends Component {
    constructor(props){
        super(props)
        this.state={show:false}
    }

    render(){
        const Options = () => this.props.items? Object.keys(this.props.items).map((item, key)=>
                <Button 
                    zIndex='100'
                    onClick={()=>{
                        store.dispatch(change('product', 'nextDescription', Object.keys(this.props.items)[key]))
                        this.setState({show:false})
                    }}
                    key={key} 
                    textAlign='left'
                >{this.props.items[item]}</Button>
            ) : null
        return(
            <div style={{position:'relative', zIndex:'100'}}>
                <Button 
                    width='120px' 
                    onClick={()=>this.setState({...this.state, show:!this.state.show})} 
                    relative 
                    padding='8px 26px 8px 8px'
                    margin='0 5px 0 0'    
                    zIndex='10'                
                >
                    {this.props.items[this.props.nextDescription]||this.props.default}
                    <Triangle/>
                </Button>
                {
                    this.state.show?
                        <Flex position='absolute' zIndex='100'>
                            <Options/>
                        </Flex>:null
                }
            </div>
        )
    }
}

export default Select
