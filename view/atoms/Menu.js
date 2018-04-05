import styled from 'styled-components'
import { Menu  } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(Menu)`
width: 100%;
display: flex;
align-items:center;
padding:10px 0;
margin:0 !important;
justify-content:space-between;
${props=> props.height? `height: ${props.height};`:null}
`
