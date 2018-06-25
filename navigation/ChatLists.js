import React, {Component} from 'react'
import { connect } from 'react-redux';
import { StyleSheet, TouchableHighlight } from 'react-native'
import firebase from 'firebase'
import {
	ListView, Text as TextStyle, Row, Image,
	View, Subtitle, Caption,
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
const Message = ({ msg }) => (
	<Row>
			{/* <Image styleName="small-avatar top"
						 source={{ uri:'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'}} /> */}
			<View styleName="vertical">
					<View styleName="horizontal space-between">
							<Subtitle>{msg.detailProduct.brandName}: {msg.detailProduct.productName}</Subtitle>
							<Caption>stock: {msg.detailProduct.stock}</Caption>
					</View>
					<TextStyle styleName="multiline">{msg.chats[msg.chats.length-1].message}</TextStyle>
			</View>
	</Row>
);
class ChatLists extends Component {
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

	render(){
		const { messages } = this.props
		console.log('chat list is rendered !!')
		console.log('message->', messages)
		return (
			// <Flex style={styles.container} height="100%"  justifyContent="center" alignItems="center">
			// 	{/* {messages&&<ListView data={messages}
			// 		autoHideHeader={true}
			// 		renderRow={list => List(list)}
			// 		// onLayout={onLayout}
			// 	/>} */}
			// 	{messages && messages.map((value,index) => {
			// 		return <TouchableHighlight key={index}>
			// 			<Flex>
			// 				<Card backgroundColor="#f76444"><TextStyle color="black" fontSize="24px">{value.detailProduct.productName}</TextStyle></Card>
			// 			</Flex>
			// 		</TouchableHighlight>
			// 	})}

			// </Flex>
			<View style={styles.ListStyle}>
			{messages && messages.map((value,index) => {
				return <TouchableHighlight key={index}>
						{/* <Card backgroundColor="#f76444"><TextStyle color="black" fontSize="24px">{value.detailProduct.productName}</TextStyle></Card> */}
						<Flex>
							<ListView data={messages}
											autoHideHeader={true}
											renderRow={msg => <Message msg={msg} />}
											// onLayout={onLayout}
											/>
						</Flex>
				</TouchableHighlight>
			}) }
			</View>
		)
	}
}

const styles = StyleSheet.create({
	ListStyle: {
		marginTop: '40%',
		alignItems: 'center',
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