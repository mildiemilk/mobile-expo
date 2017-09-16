import styled from 'styled-components'
import { 
	Menu as SemanticMenu, 
	Button as SemanticButton, 
	Segment as SemanticSegment 
} from 'semantic-ui-react'
import color from '../asset/const/color.json'

export const H1 = styled.h1`
	font-size: calc(35pt);
	color: ${color.darkPrimary};
`

export const H3 = styled.h3`
	font-size: 26pt;
	color: ${color.darkPrimary};
`

export const Item = styled(SemanticMenu.Item)`
	background: ${color.darkPrimary} !important;
	color: ${color.lightPrimary} !important;
	flex-grow: 1;
	font-size: 15px;
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
	min-width: 10vw;
	min-height: 80px !important;
`

export const Segment = styled(SemanticSegment)`
@media (min-width: 700px) {
	padding: 30px 20px 50px 20px !important;
	margin: 25px 50px 25px 50px !important;
}
`
export const Button = styled(SemanticButton)`
background: ${color.contrastPrimary} !important;
color: ${color.darkPrimary} !important;
&:hover {
		background: ${color.lightPrimary} !important;
		color: ${color.darkPrimary} !important;
		transition: 0.3s;
		z-index:10;
		font-weight: bold !important;
	}
`
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
