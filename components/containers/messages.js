import React from 'react';
import { connect } from 'react-redux';
import { View, Spinner } from '@shoutem/ui';

import MessageList from './messageList';
// import { updateMessagesHeight } from '../../actions/message';



const Messages = ({ messages, isFetching, updateMessagesHeight }) => {
    if (isFetching) {
        return (
            <View style={{paddingTop: 50,
                          paddingBottom: 50}}>
                <Spinner />
            </View>
        )
    }else{
        console.log('messagesList', messages)
        return <MessageList messages={messages}
                            style={{minHeight: 100}}
                            onLayout={(event) => updateMessagesHeight(event)} 
                            
                            />
    }
};

export default Messages;
