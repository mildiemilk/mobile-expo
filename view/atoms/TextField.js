import styled from 'styled-components'
import { Field } from 'redux-form'
import color from '../../static/json/color.json'
import Input from '../atoms/Input'


export default props => <div>
    <span>{props.label}</span><Field
{...props} component={Input}
fontSize="1.2em" 
placeholder={props.placeholder}
/></div>

