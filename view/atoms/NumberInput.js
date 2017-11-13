import Input from '../atoms/Input'
import { Field } from 'redux-form'

const formatValue = value => value ? value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0,2) : null

export default () => <Field
	name="myField" 
	component={Input} 
	format={formatValue}
	type="number"
/>
