import styled from 'styled-components'
import { Field } from 'redux-form'
import color from '../../static/json/color.json'
import Input from '../atoms/Input'

export default () => <Field
name="myField" component={Input}
/>

