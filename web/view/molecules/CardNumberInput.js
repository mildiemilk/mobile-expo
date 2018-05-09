import styled from 'styled-components'
import { Field } from 'redux-form'
import color from '../../static/json/color.json'
import Input from '../atoms/Input'

const formatValue = value => value ? value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0,19) : null

export default props => <Field
	{...props} component={Input} format={formatValue} width="100%" maxWidth="200px" fontSize="1.4em" placeholder="xxxx xxxx xxxx xxxx"
/>
