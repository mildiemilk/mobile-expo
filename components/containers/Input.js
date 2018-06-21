import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextInput, StyleSheet } from 'react-native';


class Input extends Component {
    state = {
        text: null
    }

    onChangeText = text => this.setState({text: text});

    onSubmitEditing = () => {
        this.props.dispatch(
            this.props.submitAction(this.state.text)
        );

        if (!this.props.noclear) {
            this.setState({
                text: null
            });
        }
    }

    onFocus = (event) => {
        if (this.props.onFocus) {
            this.props.onFocus(this.refs.input);
        }
    }

    onBlur = () => {
        if (this.props.submitOnBlur) {
            this.onSubmitEditing();
        }
    }

    onLayout = (event) => {
        if (this.props.onLayout) {
            this.props.onLayout(event);
        }
    }

    render() {
        return (
            <TextInput placeholder={this.props.placeholder}
                       onChangeText={this.onChangeText}
                       onSubmitEditing={this.onSubmitEditing}
                       onLayout={this.onLayout}
                       value={this.state.text}
                       onFocus={this.onFocus}
                       onBlur={this.onBlur}
                       style={styles.nameInput}
                       ref="input"/>
        )
    }
}
const offset = 24;
const styles = StyleSheet.create({
    title: {
      marginTop: offset,
      marginLeft: offset,
      fontSize: offset,
    },
    nameInput: {
      height: offset * 2,
  
      margin: offset,
      paddingHorizontal: offset,
      borderColor: '#111111',
      borderWidth: 1,
    },
    buttonText: {
      marginLeft: offset,
      fontSize: offset,
    },
  });
export default connect()(Input);