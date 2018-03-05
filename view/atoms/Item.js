import styled from 'styled-components'
import { Menu  } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(Menu.Item)`
color: ${color.white} !important;
flex-grow: 1;
font-size: 1.2rem;
@media(max-width: 500px) {
	font-size:1.2rem !important;
}
&:hover {
	transition-timing-function: ease-in;
	transition: 0.25s;
	background: ${color.contrastHighlight} !important;
	z-index:10;
	border-radius: 25px;
}
&:before {
	background: none !important;
}
`
