import styled from 'styled-components'
import { Menu  } from 'semantic-ui-react'

export default styled(Menu)`
width: 100%;
display: flex;
align-items:center;
padding:5px 0;
margin:0 !important;
justify-content:space-between;
${props=> props.height? `height: ${props.height};`:null}
`
