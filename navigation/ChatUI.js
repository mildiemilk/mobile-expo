import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';

import firebase from 'firebase'
import { Title, Screen } from '@shoutem/ui';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { logout } from '../handlers/auth'
import Button from '../components/base/Button'
import Messages from '../components/containers/messages';
import Input from '../components/containers/Input';
import { sendMessage, updateMessagesHeight, loadMessage, searchChatRoom } from '../handlers/message';

class ChatUI extends Component {
	state = {
		scrollViewHeight: 0,
		inputHeight: 0,
	}

	async componentDidMount() {
		this.scrollToBottom(false);
		firebase.auth().onAuthStateChanged((user => {
			console.log('user',user)
			if(user === null){
				this.props.navigation.navigate('Auth')
			}
		}))
		const messagesParam = this.props.navigation.getParam('messages', 'NO-DATA');
	//	searchChatRoom(messagesParam.chatId)
	}
		componentWillReceiveProps(nextProps) {
			const { messages, user, loadMessage } = this.props
			console.log('messssssss', messages, nextProps.messages)
			if( JSON.stringify(nextProps.messages) !==  JSON.stringify(messages)) {
				loadMessage(user)
				
			}
		}			
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
		const messagesParam = this.props.navigation.getParam('messages', 'NO-DATA');
		return sendMessage(text, this.props.user, messagesParam.chatId)
	}

	render() {
		const { updateMessagesHeight, navigation, messages} = this.props
		const messagesParam = navigation.getParam('messages', 'NO-DATA');
		console.log('messages props CHAI UI--->', messagesParam, messages)
			return (
				<Screen>
				{messagesParam&& 
					<Title styleName="h-center">
							{messagesParam.detailProduct.productName}({messagesParam.detailProduct.stock})
					</Title>
				}
					<KeyboardAwareScrollView ref="scroll" onLayout={this.onScrollViewLayout}>
						<Messages messages={messagesParam.chats} updateMessagesHeight={updateMessagesHeight}/>
						<Input 
						onLayout={this.onInputLayout}
						onFocus={this._scrollToInput}
						submitAction={this.sendMessage}
						ref="input"
						placeholder="Say something cool ..."
					/>
					</KeyboardAwareScrollView>
				</Screen>
			)
	}
}

const mapStateToProps = (state) => ({
	chatHeight: state.chatroom.meta.height,
	user: state.user,
	messages: state.chatroom.messages.lists,
});
const mapDispatchToProps = (dispatch) => ({
	sendMessage: ({text, user}) => dispatch(sendMessage({text,user})),
	updateMessagesHeight: (e) => dispatch(updateMessagesHeight(e)),
	searchChatRoom: (chatId) => dispatch(searchChatRoom(chatId)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatUI);