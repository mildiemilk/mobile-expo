import styled from 'styled-components'
import Input from '../atoms/Input'
import { Field } from 'redux-form'

const formatValue = value => value ? value.replace(/[^\d]/g, '').slice(0,2) : null

export default props => <Field
{...props} component={Input} 
format={formatValue} 
width="65px" 
fontSize="30px" 
min="1" 
max="12" 
type="number"
placeholder="MM"
/>