import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';

import firebase from 'firebase'
import { View, Title, Screen } from '@shoutem/ui';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { logout } from '../handlers/auth'
import Button from '../components/base/Button'
import Messages from '../components/containers/messages';
import Input from '../components/containers/Input';
import { sendMessage, loadMessage, fetchMessages, updateMessagesHeight } from '../actions/message';

class ChatUI extends Component {
    state = {
        scrollViewHeight: 0,
        inputHeight: 0
    }

    componentDidMount() {
			this.scrollToBottom(false);
			firebase.auth().onAuthStateChanged((user => {
				console.log('userchange state - ChatList')
				console.log('user',user)
				if(user === null){
					this.props.navigation.navigate('Auth')
				}
			}))
			this.props.loadMessage(this.props.user)
		}
		// componentWillReceiveProps(NextProps) {
		// 	if(this.props.messages !== NextProps.messages) {
		// 		this.props.loadMessage(this.props.user)
		// 	}

		// }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    onScrollViewLayout = (event) => {
        const layout = event.nativeEvent.layout;

        this.setState({
            scrollViewHeight: layout.height
        });
    }

    onInputLayout = (event) => {
        const layout = event.nativeEvent.layout;

        this.setState({
            inputHeight: layout.height
        });
    }

    scrollToBottom(animate = true) {
        const { scrollViewHeight, inputHeight } = this.state,
              { chatHeight } = this.props;

        const scrollTo = chatHeight - scrollViewHeight + inputHeight;

        if (scrollTo > 0) {
           this.refs.scroll.scrollToPosition(0, scrollTo, animate)
        }
    }

    _scrollToInput = (reactRef) => {
        this.refs.scroll.scrollToFocusedInput(ReactNative.findNodeHandle(reactRef));
    }


    sendMessage = (text) => {
        return sendMessage(text, this.props.user)
    }

    render() {
			const { messages, updateMessagesHeight } = this.props
			console.log('messages props', messages)
        return (
            <Screen>
                <Title styleName="h-center" style={{paddingTop: '30%'}}>
                    Global Chatroom
                </Title>
                <KeyboardAwareScrollView ref="scroll"
                                         onLayout={this.onScrollViewLayout}>
                    {messages && <Messages messages={this.props.messages} updateMessagesHeight={updateMessagesHeight}/> }
                    <Input 
                    onLayout={this.onInputLayout}
                    onFocus={this._scrollToInput}
                    submitAction={this.sendMessage}
                    ref="input"
                    placeholder="Say something cool ..."
                />
                </KeyboardAwareScrollView>

                {/* <Button color="#4065b3" onPress={() => fetchMessages('Fhm5rPrS0TPTTxzGXi4W9T7er9f1')}>test</Button> */}
            </Screen>
        )
    }
}

const mapStateToProps = (state) => ({
		chatHeight: state.chatroom.meta.height,
		messages: state.chatroom.messages.lists,
    user: state.user
});
const mapDispatchToProps = (dispatch) => ({
		sendMessage: ({text, user}) => dispatch(sendMessage({text,user})),
		loadMessage: (user) => dispatch(loadMessage(user)),
		updateMessagesHeight: (e) => dispatch(updateMessagesHeight(e))
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatUI);