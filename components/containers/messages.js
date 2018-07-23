import React from 'react'
import { View, Spinner } from '@shoutem/ui'
import MessageList from './messageList'



const Messages = ({ messages, isFetching, updateMessagesHeight }) => {
	if (isFetching) {
		return (
				<View style={{paddingTop: 50, paddingBottom: 50}}>
					<Spinner />
				</View>
		)
	}else{
		return <MessageList messages={messages}
						style={{minHeight: 100}}
						onLayout={(event) => updateMessagesHeight(event)} 
						/>
	}
};

export default Messages;
