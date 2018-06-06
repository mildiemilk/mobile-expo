import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import firebase from 'firebase'
import config from '../database/config.json'

if (!firebase.apps.length) {
    console.log('initialize')
  firebase.initializeApp(config);
}

class ChatLists extends Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user=>{
            console.log('userchange state')
            console.log('user',user)
            if(user!==null){
              console.log('success')
            }
          }))
    }

    render(){
        return (
            <View>
                <Text>Chat Screen </Text> 
            </View>
        )
    }
}


export default ChatLists