import React from 'react'
import { Form } from 'semantic-ui-react'
import Head from '../containers/DefaultHead'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'
const ERROR = 'error'
const SUCCESS = 'success'
const WARNING = 'warning'

const validateRule = (noCondition, warningCondition, errorCondition) => noCondition? null :errorCondition ? ERROR: warningCondition ? WARNING : SUCCESS

const validateLength = (inputLength, warningLength, errorLength) => validateRule(inputLength === null, inputLength < warningLength, inputLength < errorLength )

const validateEmailRegex = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email === null ? null : re.test(email) ? SUCCESS: ERROR
}

export const validateEmail = ( email ) => {
	var validateLengthResult = email? validateLength(email? email.length : null, 10, 10) : null
	var validateEmailResult = validateEmailRegex(email)
	var status = email? computeStatus([validateLengthResult, validateEmailResult]) : null 
	var errorText = []
	errorText = 
		validateLengthResult === 'error' ? [ ...errorText, "length must be more than 10"] : errorText
	errorText =
		validateEmailResult === 'error' ? [...errorText, "must be in email format"] : errorText
	return ({status,errorText})
}

export const validatePassword = ( password ) => {
	var validateLengthResult = validateLength(password? password.length : null, 8, 8)
	var validatePasswordResult = validatePasswordRegex(password)
	var status = password ? computeStatus([validateLengthResult]) : null
	var errorText = []
	errorText =
		validateLengthResult === 'error' ? [...errorText, 'password must be more that 8 characters'] : errorText
	errorText =
		validatePasswordResult === 'error' ? [...errorText, 'password must have capital and small letter and number'] : errorText
	return({status,errorText})
}

export const validatePasswordConfirmation = ( password, passwordConfirm ) => {
	var status = password === passwordConfirm ? SUCCESS : ERROR
	var errorText = status === ERROR ? ["password confirmation has to match password"] : []
	return({status,errorText})
}

const validatePasswordRegex = (password) => {
	const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
	return password === null ? null : re.test(password) ? SUCCESS : ERROR
}

const computeStatus=(validateArray) => {
	var status 
	validateArray.forEach( validation => 
		status = validation === ERROR ? ERROR : SUCCESS
	)
	return status
}

export const renderEmail = (email) => {
	return <TextInput
		type="email"
		name="email"
		label="email"
		placeholder="example@example.com"
	/>
}

export const renderPassword = (password) => { 
	return <TextInput
		type="password"
		name="password"
		label="password"
		placeholder="password"
	/>
}

export const renderPasswordConfirm = (password, passwordConfirm) => {
	return <TextInput
		type="password"
		name="passwordConfirm"
		status={passwordConfirm ? status : null}
		label="Password Confirmation"
		placeholder="password confirmation"
	/>
}

export const TextInput = (
	{
		type,
		name, 
		placeholder, 
		label,
		value
	}
) =>
<div>
	<label>{label}</label>
	<Field 
		className="form-control"
		id="formBasicText" 
		name={name} 
		component="input"
		placeholder={placeholder}
		type={type} 
	>
	</Field>
</div>

TextInput.defaultProps = {
	type: "text",
	helpTextArray: [],
	status: null
}

TextInput.propTypes = {
	type : PropTypes.string.isRequired,
	name : PropTypes.string.isRequired, 
	label : PropTypes.string.isRequired, 
	placeholder : PropTypes.string, 
}

validateEmailRegex.propTypes = {
	email: PropTypes.string.isRequired
}

validateRule.propTypes = {
	noCondition : PropTypes.bool.isRequired,
	warningCondition : PropTypes.bool.isRequired,
	errorCondition : PropTypes.bool.isRequired
}

validateLength.propTypes = {
	length: PropTypes.number.isRequired,
	lengthWarningSize: PropTypes.number.isRequired,
	lengthErrorSize: PropTypes.number.isRequired
}

