import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative,{ SafeAreaView, StyleSheet, KeyboardAvoidingView, TextInput, ScrollView, View, Text } from 'react-native';
import _ from 'lodash'
import firebase from 'firebase'
import { Title, Screen, NavigationBar } from '@shoutem/ui';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { sendMessage, updateMessagesHeight, searchChatRoom, searchProduct } from '../handlers/message';
import { loadMessageAction } from '../actions/message'
import Messages from '../components/containers/messages';
import Input from '../components/containers/Input';

class ChatMessages extends Component {
  state = {
		scrollViewHeight: 0,
		inputHeight: 0,
		messagesInChatRoom: {},
	}
	async componentDidMount() {
		const { messages, navigation, chatId } = this.props
		this.updateChatUI()
		// this.scrollToBottom(false);
		firebase.auth().onAuthStateChanged((user => {
			if(user === null){
				navigation.navigate('Auth')
			}
		}))
		if(messages) {
			const index = _.findIndex(messages, {chatId})
			this.setState({messagesInChatRoom: messages[index]})
		}
	}
  updateChatUI = async () => {
		firebase
		.database()
		.ref(`chatrooms/${this.props.chatId}`)
		.on('value', async snapshot => {
			const data = snapshot.val()
			const detailProduct = await searchProduct(data.productId)
			this.setState({messagesInChatRoom: {...data, detailProduct}})
		})
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

	_scrollToInput = (reactNode) => {
		this.refs.scroll.scrollToFocusedInput(reactNode);
	}


	sendMessage = (text) => {
		const { user, chatId } = this.props
		return sendMessage(text, user, chatId)
	}
  render() {
    const { updateMessagesHeight } = this.props
    const { messagesInChatRoom } = this.state
    return (
      <Screen>
        { !_.isEmpty(messagesInChatRoom)&&
          <SafeAreaView style={styles.container}>
            <NavigationBar
              styleName="inline"
              title={ `${messagesInChatRoom.detailProduct.productName}(${messagesInChatRoom.detailProduct.stock})`} 
            />
            <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
              <ScrollView style={{flex: 1}} onLayout={this.onScrollViewLayout} >
                <Messages messages={ messagesInChatRoom.chats} updateMessagesHeight={updateMessagesHeight}/>
              </ScrollView>
              <Input 
                style={{height: 40, width: '100%', backgroundColor: '#fff', paddingLeft: 10, justifySelf: 'flex-end', color: 'back'}}
                onLayout={this.onInputLayout}
                // onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))}
                submitAction={this.sendMessage}
                ref="input"
                placeholder="Say something cool ..."
              />
            </KeyboardAvoidingView>
          </SafeAreaView>
        }
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

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
	loadMessageAction,
	searchProduct
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatMessages);
