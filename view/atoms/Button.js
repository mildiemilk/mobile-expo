import styled from 'styled-components'
import { Button as SemanticButton } from 'semantic-ui-react'

export default styled(SemanticButton)`
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
