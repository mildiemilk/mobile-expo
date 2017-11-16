import styled from 'styled-components'
import { Field } from 'redux-form'
import color from '../../static/json/color.json'
import Input from '../atoms/Input'

export default props => <Field
{...props} component={Input}
fontSize="30px" 
placeholder="steve jobs"
/>

