import styled from 'styled-components'
import { Button as SemanticButton } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(SemanticButton)`
background: ${color.theme} !important;
color: ${color.white} !important;
padding: 0.1rem 0.1rem 0rem 0.5rem;
margin: 5px;
border: 0.1rem solid ${color.primary};
min-width: 30px;
min-height: 30px !important;
`
