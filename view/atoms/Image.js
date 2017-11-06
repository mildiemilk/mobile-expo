import styled from 'styled-components'

export default styled.img.attrs({
	size: props => props.size || '400px'
})`
	max-width: ${props=> props.subImg ? '20vw' :'100vw'};
	min-height: 320px;
	height: 400px;
	max-width: ${props => props.size};
	width: inherit;
	object-fit:scale-down;
	max-height: ${props => props.maxHeight||'-webkit-fill-available'};
	@media (max-width: 700px) {
		${props => props.smallScreen || null}
	}
`
