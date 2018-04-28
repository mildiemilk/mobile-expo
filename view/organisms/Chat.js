import React from 'react'
import ChatButton from '../molecules/ChatButton'
import ChatBox from '../molecules/ChatBox'
import { Transition } from 'semantic-ui-react'

class Chat extends React.Component{
    constructor(props) {
        super(props)
        this.state = {display: false}
      }

    render(){
        return(
            <React.Fragment>
                {
                    this.state.display ? 
                    <Transition visible={this.state.display} animation='scale' duration={500}>
                        <ChatBox {...this.props} onClose={()=>this.setState({display:!this.state.display})}/>
                    </Transition>:
                    <ChatButton onClick={()=>this.setState({display:!this.state.display})}/>
                }
            </React.Fragment>
        )
    }
}

export default Chat