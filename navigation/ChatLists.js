import React, {Component} from 'react'
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import firebase from 'firebase'
import {
	ListView, Text as TextStyle, Row, Image,
	NavigationBar, Subtitle, Caption, View as ViewStyle
} from '@shoutem/ui';
import { Permissions, Notifications } from 'expo'
import config from '../database/config.json'
import Button from '../components/base/Button'
import { logout } from '../handlers/auth'
import { loadMessage } from '../handlers/message'
import { Flex } from '../components/base/Flex'
import { saveUserNotificationKey } from '../handlers/auth'

if (!firebase.apps.length) {
	console.log('initialize')
  firebase.initializeApp(config);
}
const Message = ({ msg, navigation}) => {
	return (<Row>
		<TouchableOpacity style={{width:'100%', height:'100%'}} onPress={() => navigation.navigate('ChatUI', { chatId: msg.chatId})}>
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

	state = {
		chatroom: {
			chats: []
		}
	}

	async componentDidMount(){
		firebase.auth().onAuthStateChanged(async (user)=>{
			if(user===null){
				this.props.navigation.navigate('Auth')
			} else {
				let {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
				if (status === 'granted'){
				let token   = await Notifications.getExpoPushTokenAsync()
				saveUserNotificationKey(user.uid, token)
				}
			}
		})
		this.props.loadMessage(this.props.user)
	}
	componentWillReceiveProps(nextProps) {
		const { messages, user, loadMessage } = this.props
		if( JSON.stringify(nextProps.messages) !==  JSON.stringify(messages)) {
			loadMessage(user)
		}
	}
	render(){
		const { messages, navigation } = this.props
		return (
			<View  style={styles.container}>
				<Text>Chat List </Text>
				<Flex>
					{messages&& messages.length > 0? <ListView data={messages}
						autoHideHeader={true}
						renderRow={msg => <Message msg={msg} navigation={navigation}/>}
					/>: <NavigationBar
						styleName="inline"
						title="No Message" 
					/>
					}
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
const mapDispatchToProps = {
	loadMessage,
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatLists);