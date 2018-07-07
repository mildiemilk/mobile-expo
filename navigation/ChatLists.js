import React, {Component} from 'react'
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import firebase from 'firebase'
import {
	ListView, Text as TextStyle, Row, Image,
 Subtitle, Caption, View as ViewStyle
} from '@shoutem/ui';

import config from '../database/config.json'
import Button from '../components/base/Button'
import { logout } from '../handlers/auth'
import { loadMessage } from '../handlers/message'
// import { Card } from '../components/base/Card'
import { Flex } from '../components/base/Flex'
// import { TextStyle } from '../components/base/TextStyle'

if (!firebase.apps.length) {
	console.log('initialize')
  firebase.initializeApp(config);
}
const Message = ({ msg, navigation}) => {
	console.log('msg Renderrrrr ChatList', msg)
	return (<Row>
		<TouchableOpacity onPress={() => navigation.navigate('ChatUI', { chatId: msg.chatId})}>
		<ViewStyle styleName="vertical stretch space-between">
			<Subtitle>{msg.chats[msg.chats.length-1].message}</Subtitle>
			<ViewStyle styleName="horizontal space-between">
				<Caption>{msg.detailProduct.brandName}: {msg.detailProduct.productName}</Caption>
			</ViewStyle>
  	</ViewStyle>
		</TouchableOpacity>
	</Row>
	)}
class ChatLists extends Component {

	componentDidMount(){
		firebase.auth().onAuthStateChanged((user=>{
			if(user===null){
				this.props.navigation.navigate('Auth')
			}
		}))
		console.log('ChatList is called.')
		this.props.loadMessage(this.props.user)
	}
	componentWillReceiveProps(nextProps) {
		const { messages, user, loadMessage } = this.props
		console.log('messssssss', messages, nextProps.messages)
		if( JSON.stringify(nextProps.messages) !==  JSON.stringify(messages)) {
			loadMessage(user)
		}
	}
	render(){
		const { messages, navigation } = this.props
		console.log('chat list is rendered !!')
		console.log('message ChatList->', messages)
		return (
			<View  style={styles.container}>
				<Flex>
					{messages&& <ListView data={messages}
						autoHideHeader={true}
						renderRow={msg => <Message msg={msg} navigation={navigation}/>}
					/>}
				</Flex>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
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