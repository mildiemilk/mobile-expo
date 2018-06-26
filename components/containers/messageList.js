import React, { Component } from 'react';
import {
    ListView, Text, Row, Image,
    View, Subtitle, Caption,
} from '@shoutem/ui';
import moment from 'moment';

const Message = ({ msg }) => {
    console.log('msg---->', msg)
   return <Row>
        <Image styleName="small-avatar top"
               source={{ uri:'https://abs.twimg.com/sticky/default_profile_images/default_profile_3_400x400.png'}} />
        <View styleName="vertical">
            <View styleName="horizontal space-between">
                <Subtitle>UNKNOWN</Subtitle>
                {/* <Caption>{moment(msg.timestamp).from(Date.now())}</Caption> */}
            </View>
            {/* <Text styleName="multiline">{msg.message}</Text> */}
        </View>
    </Row>
}

const MessageList = ({ messages, onLayout, alldetail }) => {
    console.log('UI--->', messages)
   return <ListView data={messages}
              autoHideHeader={true}
              renderRow={msg => <Message msg={msg}/>}
              onLayout={onLayout}
              />
};

export default MessageList;