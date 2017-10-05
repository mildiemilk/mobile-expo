import styled from 'styled-components'
import { Menu as SemanticMenu } from 'semantic-ui-react'

export const Item = styled(SemanticMenu.Item)`
background: ${color.darkPrimary} !important;
color: ${color.lightPrimary} !important;
flex-grow: 1;
font-size: 15px;
&:hover {
	transition-timing-function: ease-in;
	transition: 0.25s;
	background: ${color.contrastPrimary} !important;
	color: ${color.darkPrimary} !important;
	z-index:10;
	font-weight: bold !important;
}
`
