import React from 'react'
import { Form } from 'semantic-ui-react'
import { Field } from 'redux-form'
import PropTypes from 'prop-types'

export const TextInput = ({type,name, placeholder, label, value, normalizer}) =>
<div>
	<label>{label}</label>
	<Field 
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
	type: "text"
}

TextInput.propTypes = {
	type : PropTypes.string.isRequired,
	name : PropTypes.string.isRequired, 
	label : PropTypes.string.isRequired, 
	placeholder : PropTypes.string, 
}
