import React, {Component} from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import firebase from 'firebase'
import config from '../database/config.json'
import Button from '../components/base/Button'
import { Flex } from '../components/base/Flex'
import { logout } from '../handlers/auth'

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
    }

    render(){
        console.log('chat list is rendered !!')
        return (
            <Flex justifyContent="center" height="100%" style={styles.container}>
                <Text>Chat Screen </Text> 
                <Button color="#4065b3" onPress={logout}>logout</Button>
            </Flex>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
  })
export default ChatLists