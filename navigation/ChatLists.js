import React, {Component} from 'react'
import { connect } from 'react-redux';
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import firebase from 'firebase'
import {
	ListView, Text as TextStyle, Row, Image,
 Subtitle, Caption,
} from '@shoutem/ui';

import config from '../database/config.json'
import Button from '../components/base/Button'
import { logout } from '../handlers/auth'
import { loadMessage } from '../handlers/message'
// import { Card } from '../components/base/Card'
import { Flex } from '../components/base/Flex'
import ChatUI from './ChatUI';
// import { TextStyle } from '../components/base/TextStyle'

if (!firebase.apps.length) {
	console.log('initialize')
  firebase.initializeApp(config);
}
const Message = ({ msg, handleState, isDisplayChat}) => (
	<Row>
		<TouchableHighlight onPress={() => handleState(msg)}>
			<View styleName="vertical">
				<View styleName="horizontal space-between">
					<Subtitle>{msg.detailProduct.brandName}: {msg.detailProduct.productName}</Subtitle>
					<Caption>stock: {msg.detailProduct.stock}</Caption>
				</View>
				<TextStyle styleName="multiline">{msg.chats[msg.chats.length-1].message}</TextStyle>
			</View>
		</TouchableHighlight>
	</Row>
);
class ChatLists extends Component {
	state = {
		isDisplayChat: false,
		msgObj: {},
	}
	componentDidMount(){
		firebase.auth().onAuthStateChanged((user=>{
			console.log('userchange state - ChatList')
			console.log('user',user)
			if(user===null){
				this.props.navigation.navigate('Auth')
			}
		}))
		console.log('ChatList is called.')
		this.props.loadMessage(this.props.user)
	}
	handleState = (msgObj) => {
		console.log('handleStateeee')
		this.setState({isDisplayChat: true, msgObj})
	}
	render(){
		const { messages } = this.props
		const { isDisplayChat, msgObj } = this.state
		console.log('chat list is rendered !!')
		console.log('message->', messages)
		return (
			<View  style={styles.container}>
				<Flex>
					{messages&& <ListView data={messages}
						autoHideHeader={true}
						renderRow={msg => <Message msg={msg} isDisplayChat={isDisplayChat} handleState={this.handleState} />}
					/>}
				</Flex>
				{isDisplayChat && <ChatUI messages={msgObj} />}
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		marginTop: '20%'
	}
})

const mapStateToProps = (state) => ({
	chatHeight: state.chatroom.meta.height,
	messages: state.chatroom.messages.lists,
	user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
	loadMessage: (user) => dispatch(loadMessage(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(ChatLists);