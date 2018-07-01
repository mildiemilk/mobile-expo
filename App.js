import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'
import { Provider } from 'react-redux'
// import styled from 'styled-components/native'
// import Button from './components/base/Button'
// import { Card } from './components/base/Card'
// import { Flex } from './components/base/Flex'
// import { TextStyle } from './components/base/TextStyle'
import { Navigator } from './Navigator'

import store from './store'
import firebase from 'firebase'
import config from './database/config.json'

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      'SukhumvitSet-Text': require('./assets/SukhumvitSet-Text.ttf'),
      'Rubik-Regular': require('./assets/Rubik-Regular.ttf')
    })
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      this.state.fontLoaded &&
      <Provider store={store}>
        <Navigator />
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
