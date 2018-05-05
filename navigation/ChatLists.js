import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'


export default props => <View>
  <Text>Chat Screen </Text> 
  <TouchableHighlight 
        onPress={()=>props.navigation.navigate('Chatroom', {
            chatId: 'chatid1',
            sellerId:'sellerId',
            buyerId: 'buyerId',
            chats: [
                {
                    key:'1',
                    sender:'buyer',
                    message:'สวัสดีจ้า',
                    timestamp: '2018-05-01 00:00:00',
                    messageType:'string'
                },
                {
                    key:'2',
                    sender:'seller',
                    message:'ดีครับ',
                    timestamp: '2018-05-01 00:00:00',
                    messageType:'string'
                },
                {
                    key:'3',
                    sender:'buyer',
                    message:'สนใจคะ',
                    timestamp: '2018-05-01 00:00:00',
                    messageType:'string'
                }
            ]
  })}><Text>To ChatRoom</Text></TouchableHighlight>
</View>