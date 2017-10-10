import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import color from '../../static/json/color.json'

export default styled(Button)`
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
