import styled from 'styled-components'

export default styled.div.attrs({
	maxSize: props => props.maxSize || '100%'
})`
max-width: ${props => props.minSize || '400px'};
max-height: ${props => props.minSize || '400px'};
height: ${props => props.minSize || '400px'};
width: 100%;
@media only screen and (max-width: 360px) and (min-width: 330px) {
	height: ${props => props.mobileHeight||'-webkit-fill-available'};
}
@media only screen and (max-width: 320px) {
	height: ${props => props.mobileHeightSmall||'-webkit-fill-available'};
}
`
