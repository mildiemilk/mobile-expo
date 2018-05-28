import styled from 'styled-components'
import Input from '../atoms/Input'
import { Field } from 'redux-form'

const formatValue = value => value ? value.replace(/[^\d]/g, '').slice(0,3) : null

export default props => <Field
{...props} 
component={Input} 
format={formatValue} 
width="65px" 
fontSize="1.4em" 
type="password"
placeholder="123"
/>