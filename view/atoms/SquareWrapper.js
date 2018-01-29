import styled from 'styled-components'

export default styled.div.attrs({
	maxSize: props => props.maxSize || '400px'
})`
	margin: ${props => props.margin};
	max-width: ${props => props.maxSize};
	max-height: ${props => props.maxSize};
	width: ${props => props.maxSize};
	height:  auto;
	@media (max-width: 600px) {
		 max-width: 100vw;
	}
`
