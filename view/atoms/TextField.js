import { Field } from 'redux-form'
import { Grid } from 'semantic-ui-react'
import Input from '../atoms/Input'
import Flex from '../atoms/Flex'
import styled from 'styled-components'

const CustomGrid = styled(Grid.Column)`
  padding: 0px !important;
`

const Label = styled.span`
  color:${props=>props.color?props.color:'gray'};
  font-size:140%;
`

export default props => 
  <div style={{margin:'20px'}}>
    <Grid>
      {props.label? 
      <CustomGrid width={props.noGrid?2:4}>
        <Flex direction="row" height="100%" justifyContent={props.labelFlexStart? "flex-start":"flex-end"} verticleCenter><Label color={props.color}>{props.label}</Label></Flex>
      </CustomGrid>
      :null
      }
      <CustomGrid width={props.noGrid?14:12}>
      <Field
        value="test"
        {...props} 
        component={Input}
        width="none"
        fontSize="1.2em" 
        placeholder={props.placeholder}
        format={props.format}
      />
      </CustomGrid>
    </Grid>
  </div>

