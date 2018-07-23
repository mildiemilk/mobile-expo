import React from 'react';
import { Image } from 'react-native'
import {
    ListView, Text, Row,
    View, Subtitle, Caption,
} from '@shoutem/ui';
import moment from 'moment';

const Message = ({ msg }) => {

  return <Row>
		<View styleName="vertical">
			<View styleName="horizontal space-between">
					<Subtitle>{msg.author? msg.author.name:'UNKNOWN'}: {msg.sender}</Subtitle>
					<Caption>{moment(msg.timestamp, "YYYY/MM/DD hh:mm:ss A").from(moment())}</Caption>
			</View>
			<Text styleName="multiline">{msg.message}</Text>
		</View>
	</Row>
}

const MessageList = ({ messages, onLayout }) => {
	return <ListView data={messages}
					autoHideHeader={true}
					renderRow={msg => <Message msg={msg}/>}
					onLayout={onLayout}
					/>
};

export default MessageList;