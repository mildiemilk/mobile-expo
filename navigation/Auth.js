import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'
import firebase from 'firebase'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { NavigationActions } from 'react-navigation'

import Button from '../components/base/Button'
import { Card } from '../components/base/Card'
import { Flex } from '../components/base/Flex'
import { TextStyle } from '../components/base/TextStyle'
import { StackNavigator } from 'react-navigation'
import { loginWithFacebook } from '../handlers/auth'
import config from '../database/config.json'

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class Auth extends Component{

  componentDidMount() {
    
    firebase.auth().onAuthStateChanged((user=>{
      console.log('userchange state!!')
      console.log('user',user)
      if(user!==null){
        console.log('success')
        // NavigationActions.navigate({routeName: 'ChatLists'})
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
        <Button color="#d0021b">ล๊อคอิน gmail </Button>
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

const mapStateToProps = state => {
  return ({
    user: state.user
  })
}

export default connect(mapStateToProps)(Auth)