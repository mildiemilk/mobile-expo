import styled from 'styled-components'
import { Menu  } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(Menu.Item)`
background: ${color.primary1} !important;
color: ${color.lightPrimary} !important;
flex-grow: 1;
font-size: 2rem;
&:hover {
	transition-timing-function: ease-in;
	transition: 0.25s;
	background: ${color.contrastPrimary} !important;
	color: ${color.lightPrimary} !important;
	z-index:10;
}
`
