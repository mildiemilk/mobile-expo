import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextInput, StyleSheet, View, Keyboard } from 'react-native';


class Input extends Component {
	state = {
		text: null,
		keyboardShow: false
	}
	_keyboardDidShow=()=> this.setState({keyboardShow: true})

	_keyboardDidHide=()=>this.setState({keyboardShow: false})

	componentDidMount () {
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
	}
	
	componentWillUnmount () {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
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
			<View style={styles(this.state.keyboardShow).wrapper}>
				<TextInput 
					placeholder={this.props.placeholder}
					onChangeText={this.onChangeText}
					onSubmitEditing={this.onSubmitEditing}
					onLayout={this.onLayout}
					value={this.state.text}
					onFocus={this.onFocus}
					onBlur={this.onBlur}
					style={styles(this.state.keyboardShow).nameInput}
					ref="input"/>
			</View>
		)
	}
}
const offset = 24;
const styles = keyboardShow => StyleSheet.create({
	title: {
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
	wrapper: {
		marginBottom: keyboardShow ?  offset * 2 : 0,
		backgroundColor:'white'
	}
});
export default connect()(Input);