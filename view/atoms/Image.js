import styled from 'styled-components'

export default styled.img.attrs({
	size: props => props.size || '100%'
})`
	max-width: ${props => props.size};
	width: inherit;
	height: ${props => props.height||'-webkit-fill-available'};
	object-fit:scale-down;
	max-height: ${props => props.maxHeight||'-webkit-fill-available'};
	display: ${props => props.block? 'block': null};
	margin: ${props => props.margin};
	@media only screen and (max-width: 360px) and (min-width: 330px){
		${props => props.smallScreen || null}
		height: ${props => props.mobileHeight||'-webkit-fill-available'};
	}
	@media only screen and (max-width: 320px) {
		height: ${props => props.mobileHeightSmall||'-webkit-fill-available'};
	}
`
