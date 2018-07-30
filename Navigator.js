import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import Auth from './navigation/Auth'
import ChatLists from './navigation/ChatLists'
import ChatMessages from './navigation/ChatMessages'

export const Navigator = new createStackNavigator({
  Auth,
  ChatLists,
  ChatMessages : {
    screen: ChatMessages,
  }
},
{
  initialRouteName: 'Auth'
});

class Nav extends Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)