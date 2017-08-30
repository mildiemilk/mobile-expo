import React from 'react'
import { Form } from 'semantic-ui-react'
import { Field as ReduxField } from 'redux-form'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import color from '../asset/const/color.json'

export const Label = styled.label`
	color: {color.dardPrimary};
	@media screen and (max-width: 700px){
		font-size: 16pt;
	}
	@media screen and (min-width: 700px) {
		font-size: 20pt;
	}
`

export const Field = styled(ReduxField)`
	min-height: 40pt;
	font-size: 20pt;
	@media screen and (max-width:700px) {
		height: 60pt;
	} 
`
export const PField = styled(ReduxField)`
	input{
		font-size:20pt !important;
	}
`
export const H1Input = styled.input`
	font-size: 50pt;
	color:red;
`

export const H3Field = styled(ReduxField)`
	font-size: 30pt !important;
	font-width: bold !important;
`

export const TextInput = ({type,name, placeholder, label, value, normalizer, width}) =>
<div>
	<Label>{label}</Label>
	<Field 
		width={width}
		className="form-control"
		id="formBasicText" 
		name={name} 
		component="input"
		placeholder={placeholder}
		type={type} 
		normalize={normalizer}
	/>
</div>

TextInput.defaultProps = {
	type: "text",
	width: "12"
}

TextInput.propTypes = {
	type : PropTypes.string.isRequired,
	name : PropTypes.string.isRequired, 
	label : PropTypes.string.isRequired, 
	placeholder : PropTypes.string, 
}
