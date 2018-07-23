import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative, { StyleSheet, Text} from 'react-native';
import _ from 'lodash'

import firebase from 'firebase'
import { Title, Screen, NavigationBar } from '@shoutem/ui';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { logout } from '../handlers/auth'
import Button from '../components/base/Button'
import Messages from '../components/containers/messages';
import Input from '../components/containers/Input';
import { sendMessage, updateMessagesHeight, searchChatRoom } from '../handlers/message';
import { loadMessageAction } from '../actions/message'

class ChatUI extends Component {
	state = {
		scrollViewHeight: 0,
		inputHeight: 0,
	}

	async componentDidMount() {
		this.updateChatUI()
		this.scrollToBottom(false);
		firebase.auth().onAuthStateChanged((user => {
			if(user === null){
				this.props.navigation.navigate('Auth')
			}
		}))
	}

	updateChatUI = () => {
		firebase
			.database()
			.ref(`chatrooms/${this.props.chatId}`)
			.on('value', snapshot => this.props.loadMessageAction(snapshot.val().chats))
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
		console.log('scorlll', chatHeight, scrollViewHeight, inputHeight, scrollTo)
		if (scrollTo > 0) {
			this.refs.scroll.scrollToPosition(0, scrollTo, animate)
		}
	}

	_scrollToInput = (reactNode) => {
		this.refs.scroll.scrollToFocusedInput(reactNode);
	}


	sendMessage = (text) => {
		const { user, chatId } = this.props
		return sendMessage(text, user, chatId)
	}

	render() {
		const { updateMessagesHeight, messages, chatId} = this.props
		let index
		if(messages) {
			index = _.findIndex(messages, {chatId})
		}
			return (
				<Screen>
					<Text> Chat UI </Text>
					{ messages[index]&& 
					<NavigationBar
						styleName="inline"
						title={ `${messages[index].detailProduct.productName}(${ messages[index].detailProduct.stock})`} 
					/>
					}
					<KeyboardAwareScrollView ref="scroll" onLayout={this.onScrollViewLayout} innerRef={animated => {this.scrollToEnd = animated}}>
						<Messages messages={ messages[index].chats} updateMessagesHeight={updateMessagesHeight}/>
					</KeyboardAwareScrollView>
					<Input 
						onLayout={this.onInputLayout}
						onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))}
						submitAction={this.sendMessage}
						ref="input"
						placeholder="Say something cool ..."
					/>
				</Screen>
			)
	}
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: '10%',
  },
})
const mapStateToProps = (state, props) => ({
	chatHeight: state.chatroom.meta.height,
	user: state.user,
	messages: state.chatroom.messages.lists,
	chatId: props.navigation.state.params.chatId,
});
const mapDispatchToProps = {
	sendMessage,
	updateMessagesHeight,
	searchChatRoom,
	loadMessageAction
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatUI);