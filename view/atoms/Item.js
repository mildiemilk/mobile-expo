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
	background: ${color.contrast} !important;
}

`
