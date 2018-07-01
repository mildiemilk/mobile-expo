import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative, { StyleSheet} from 'react-native';
import _ from 'lodash'

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
		// searchChatRoom(this.props.chatId)
	}
	componentWillReceiveProps(nextProps) {
		const { messages, chatId } = this.props
		console.log('messssssss', messages, nextProps.messages)
		if( JSON.stringify(nextProps.messages) !==  JSON.stringify(messages)) {
			// searchChatRoom(chatId)
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
		const { user, chatId } = this.props
		return sendMessage(text, user, chatId)
	}

	render() {
		const { updateMessagesHeight, messages, chatId} = this.props
		console.log('messages in Render', this.props, messages, chatId)
		let index
		if(messages) {
			index = _.findIndex(messages, {chatId})
		}
			return (
				<Screen>
				{ messages[index]&& 
					<Title styleName="h-center">
							{ messages[index].detailProduct.productName}({ messages[index].detailProduct.stock})
					</Title>
				}
					<KeyboardAwareScrollView ref="scroll" onLayout={this.onScrollViewLayout}>
						<Messages messages={ messages[index].chats} updateMessagesHeight={updateMessagesHeight}/>
					</KeyboardAwareScrollView>
					{/* <Button color="#4065b3" onPress={() => this.sendMessage('eeee')}>update </Button> */}
					<Input 
						// onLayout={this.onInputLayout}
						// onFocus={this._scrollToInput}
						style={styles.container}
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
const mapDispatchToProps = (dispatch) => ({
	sendMessage: ({text, user}) => dispatch(sendMessage({text,user})),
	updateMessagesHeight: (e) => dispatch(updateMessagesHeight(e)),
	searchChatRoom: (chatId) => dispatch(searchChatRoom(chatId)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatUI);