import styled from 'styled-components'
import { Menu as SemanticMenu } from 'semantic-ui-react'
import color from '../asset/const/color.json'

export const Item = styled(SemanticMenu.Item)`
	background: ${color.darkPrimary} !important;
	color: ${color.lightPrimary} !important;
	flex-grow: 1;
	&:hover {
		-webkit-transform: scale(1.1); 
		background: ${color.contrastPrimary} !important;
		color: ${color.darkPrimary} !important;
		z-index:10;
		font-weight: bold !important;
	}
	`
	
	export const Menu = styled(SemanticMenu)`
	display: flex;
	justify-content:  flex-end;
	width: max-content;
`
