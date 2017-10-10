import styled from 'styled-components'
import { Button as SemanticButton } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(SemanticButton) `
background: white !important;
color: ${color.darkPrimary} !important;
`
