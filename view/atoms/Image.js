import styled from 'styled-components'

export default styled.img.attrs({
	size: props => props.size || '400px'
})`
	max-width: 100vw;
	height: 100vw;
	width: ${props => props.size};
	object-fit:scale-down;
	max-height: ${props => props.maxHeight||'-webkit-fill-available'};
	@media (max-width: 700px) {
		${props => props.smallScreen || null}
	}
`
