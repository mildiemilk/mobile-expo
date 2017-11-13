import styled from 'styled-components'
import { Field } from 'redux-form'
import color from '../../static/json/color.json'
import Input from '../atoms/Input'

const formatValue = value => value ? value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0,19) : null

export default () => <Field
	name="myField" component={Input} format={formatValue}
/>

