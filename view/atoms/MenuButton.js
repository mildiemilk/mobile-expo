import styled from 'styled-components'
import { Button as SemanticButton } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(SemanticButton)`
background: ${color.contrast} !important;
color: ${color.primary1} !important;
padding: 0.1rem 0.5rem 0rem 0.5rem;
margin: 5px;
border: 0.1rem solid ${color.primary1};
min-width: 10vw;
min-height: 80px !important;
`
