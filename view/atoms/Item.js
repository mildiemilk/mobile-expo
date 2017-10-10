import styled from 'styled-components'
import { Menu  } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(Menu.Item)`
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
