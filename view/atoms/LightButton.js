import styled from 'styled-components'
import { Button as SemanticButton } from 'semantic-ui-react'

export const LightButton = styled(SemanticButton)`
font-size: 20pt !important;
background: white !important;
color: ${color.lightPrimary} !important;
border: 0.1rem solid ${color.lightPrimary} !important;	
&:hover {
	z-index:10;
	font-weight: bold !important;
	background: ${color.lightPrimary} !important;
	color: ${color.darkPrimary} !important;
}
`
