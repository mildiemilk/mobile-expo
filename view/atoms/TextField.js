import { Field } from 'redux-form'
import { Grid } from 'semantic-ui-react'
import Input from '../atoms/Input'
import Flex from '../atoms/Flex'
import styled from 'styled-components'

const CustomGrid = styled(Grid.Column)`
  padding: 0px !important;
`
export default props => 
  <div style={{margin:'20px'}}>
    <Grid>
      {props.label? 
      <CustomGrid width={props.noGrid?0:2}>
        <Flex direction="row" height="100%" justContent={props.labelFlexStart? "flex-start":"flex-end"} verticleCenter><span>{props.label}</span></Flex>
      </CustomGrid>
      :null
      }
      <CustomGrid width={14}>
      <Field
        {...props} component={Input}
        fontSize="1.2em" 
        placeholder={props.placeholder}
        format={props.format}
      />
      </CustomGrid>
    </Grid>
  </div>

