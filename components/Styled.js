import styled from 'styled-components'
import { 
	Menu as SemanticMenu, 
	Button as SemanticButton, 
	Segment as SemanticSegment 
} from 'semantic-ui-react'
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

export const MenuButton = styled(SemanticButton)`
	background: ${color.contrastPrimary} !important;
	color: ${color.darkPrimary} !important;
	padding: 0.1rem 0.5rem 0rem 0.5rem;
	margin: 5px;
	border: 0.1rem solid ${color.darkPrimary};
`

export const Segment = styled(SemanticSegment)`
	margin: 25px 50px 25px 50px !important;
	padding: 30px 20px 50px 20px !important;
`
export const Button = styled(SemanticButton)`
	background: ${color.darkPrimary} !important;
	color: ${color.lightPrimary} !important;
	&:hover {
		-webkit-transform: scale(1.1); 
		background: ${color.contrastPrimary} !important;
		color: ${color.darkPrimary} !important;
		z-index:10;
		font-weight: bold !important;
		border: 0.1rem solid ${color.darkPrimary};
	}
`
export const LightButton = styled(SemanticButton)`
	background: white !important;
	color: ${color.lightPrimary} !important;
	border: 0.1rem solid ${color.lightPrimary} !important;	
	&:hover {
		-webkit-transform: scale(1.1); 
		z-index:10;
		font-weight: bold !important;
		border: 0.1rem solid ${color.darkPrimary};
	}
`

export const ExitButton = styled(SemanticButton) `
	background: white !important;
	color: ${color.darkPrimary} !important;
`

export const FloatRight = styled.div`
	float: right;
`

export const FloatLeft = styled.div`
	float: left;
`

export const SubSegment = styled(SemanticSegment) `
	margin-bottom: 1rem !important;
`
