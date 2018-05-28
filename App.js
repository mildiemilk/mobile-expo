import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'
import { Provider } from 'react-redux'
import styled from 'styled-components/native'
import Button from './components/base/Button'
import { Card } from './components/base/Card'
import { Flex } from './components/base/Flex'
import { TextStyle } from './components/base/TextStyle'
import { StackNavigator } from 'react-navigation'
import Auth from './navigation/Auth'
import ChatLists from './navigation/ChatLists'
import Chatroom from './navigation/Chatroom'
import store from './store'

const Stack =  StackNavigator({
  Auth: {
    screen: Auth,
  },
  ChatLists: {
    screen: ChatLists
  },
  Chatroom: {
    screen: Chatroom
  }
},
{
  initialRouteName: 'Auth'
});

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      'SukhumvitSet-Text': require('./assets/SukhumvitSet-Text.ttf'),
    })
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      this.state.fontLoaded &&
      <Provider store={store}>
        <Stack/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: '10%',
  },
})
