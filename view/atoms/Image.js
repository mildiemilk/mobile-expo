import styled from 'styled-components'

export default styled.img.attrs({
	size: props => props.size || '400px'
})`
	max-width: ${props => props.size};
	width: inherit;
	height: -webkit-fill-available;
	object-fit:scale-down;
	max-height: ${props => props.maxHeight||'-webkit-fill-available'};
	@media (max-width: 700px) {
		${props => props.smallScreen || null}
	}
`
