import styled from 'styled-components'
import { Field } from 'redux-form'
import color from '../../static/json/color.json'
import Input from '../atoms/Input'

const formatValue = value => value ? value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0,2) : null

export default props => <Field
	{...props} component={Input} format={formatValue}
/>
