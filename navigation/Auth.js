import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'
import firebase from 'firebase'
import { connect } from 'react-redux'
// import styled from 'styled-components/native'
import { NavigationActions } from 'react-navigation'
import { setUserName, setUserAvatar } from '../actions/user'
import Button from '../components/base/Button'
import { Card } from '../components/base/Card'
import { Flex } from '../components/base/Flex'
import { TextStyle } from '../components/base/TextStyle'
import { loginWithFacebook, signInWithGoogleAsync, saveUserNotificationKey } from '../handlers/auth'
import config from '../database/config.json'

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class Auth extends Component{
  constructor() {
    super()
    console.ignoredYellowBox = [
      'Setting a timer'
  ]
  }
  componentDidMount = async () => {
    
    firebase.auth().onAuthStateChanged(( async (user)=>{
      if(user!==null){
        const { displayName, uid } = user

        this.props.setUserName({displayName, uid})
        this.props.setUserAvatar(user)
        this.props.navigation.navigate('ChatLists')

      }
      
    }))
  }

  render() {
    return <View>
    <Flex justifyContent="space-between" height="100%">
      <Card backgroundColor="#f7626b" width="100%" height="200px">
        <Flex justifyContent="center" alignItems="center">
          <TextStyle color="white" fontSize="75px">แชร์มั้ย</TextStyle>
        </Flex>
      </Card>
      <View style={styles.container}>
        <Button color="#4065b3" onPress={()=>loginWithFacebook()}>ล๊อคอิน facebook </Button>
        <Button color="#d0021b" onPress={()=>signInWithGoogleAsync()}>ล๊อคอิน gmail </Button>
      </View>
    </Flex>
    </View>
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: '10%',
    }
  })
const mapDispatchToProps = dispatch => {
  return {
    setUserName: ({displayName, uid}) => dispatch(setUserName({displayName, uid})),
    setUserAvatar: user => dispatch(setUserAvatar(user))
}}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)