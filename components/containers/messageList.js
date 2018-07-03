import React from 'react';
import {
    ListView, Text, Row, Image,
    View, Subtitle, Caption,
} from '@shoutem/ui';
import moment from 'moment';

const Message = ({ msg }) => {
	console.log('msg messageList---->', msg)

  return <Row>
		<Image styleName="small-avatar top"
 			source={{uri: msg.author?msg.author.avatar:'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'}} 
			style={{ height: 20, width: 20 }}
		/>
		<View styleName="vertical">
			<View styleName="horizontal space-between">
					<Subtitle>{msg.author? msg.author.name:'UNKNOWN'}</Subtitle>
					<Caption>{moment(msg.timestamp, "YYYY/MM/DD hh:mm:ss A").from(moment())}</Caption>
			</View>
			<Text styleName="multiline">{msg.message}</Text>
		</View>
	</Row>
}

const MessageList = ({ messages, onLayout }) => {
	console.log('UI messageList--->', messages)
	return <ListView data={messages}
					autoHideHeader={true}
					renderRow={msg => <Message msg={msg}/>}
					// onLayout={onLayout}
					/>
};

export default MessageList;