import styled from 'styled-components'
import { Menu  } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(Menu.Item)`
color: ${color.contrast} !important;
flex-grow: 1;
font-size: 200%;
border-radius:15px;
font-weight:600 !important;
padding:10px 15px !important;
@media(max-width: 500px) {
	font-size:1.2rem !important;
}
&:hover {
	background: ${color.contrast} !important;
	color: white !important;
}
&:before {
	background: none !important;
}
`
