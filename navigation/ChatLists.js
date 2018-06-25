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
import { Flex } from '../components/base/Flex'
import { logout } from '../handlers/auth'
import { loadMessage } from '../handlers/message'

if (!firebase.apps.length) {
	console.log('initialize')
  firebase.initializeApp(config);
}

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
	List = ( list ) => {
		console.log('list--->', list)
    return <Row>
        <Image styleName="small-avatar top"
               source={{ uri:'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'}} />
        <View styleName="vertical">
            <View styleName="horizontal space-between">
                <Subtitle>AAAA</Subtitle>
                {/* <Caption>{moment(msg.timestamp).from(Date.now())}</Caption> */}
            </View>
            <TextStyle styleName="multiline">stock : {list.sponsorId}</TextStyle>
        </View>
    </Row>
	};
	render(){
		const { messages } = this.props
		console.log('chat list is rendered !!')
		console.log('message->', messages)
		return (
			<Flex style={styles.container} height="100%">
				{messages&&<ListView data={messages}
					autoHideHeader={true}
					renderRow={list => this.List(list)}
					// onLayout={onLayout}
				/>}

				<Button color="#4065b3" onPress={logout}>logout</Button>
				{/* {messages && messages.map(value => <view>{value}</view>)} */}
			</Flex>
		)
	}
}

const styles = StyleSheet.create({
	container: {
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