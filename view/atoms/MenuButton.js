import styled from 'styled-components'
import { Button as SemanticButton } from 'semantic-ui-react'

export default styled(SemanticButton)`
background: ${color.contrastPrimary} !important;
color: ${color.darkPrimary} !important;
padding: 0.1rem 0.5rem 0rem 0.5rem;
margin: 5px;
border: 0.1rem solid ${color.darkPrimary};
min-width: 10vw;
min-height: 80px !important;
`
