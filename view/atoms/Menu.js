import styled from 'styled-components'
import { Menu  } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(Menu)`
background: ${color.contrast} !important;
width: 100%;
display: flex;
justify-content:${props=>props.justifyContent};
${props=> props.height? `height: ${props.height};`:null}
`
