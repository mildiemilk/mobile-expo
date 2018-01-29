import { Field } from 'redux-form'
import { Grid } from 'semantic-ui-react'
import Input from '../atoms/Input'
import Flex from '../atoms/Flex'
import styled from 'styled-components'

const CustomGrid = styled(Grid.Column)`
  padding: 0px !important;
`
export default props => 
  <Field
    {...props} component={Input}
    fontSize="1.2em" 
    placeholder={props.placeholder}
    format={props.format}
  />

