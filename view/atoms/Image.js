import styled from 'styled-components'

export default styled.img.attrs({
	size: props => props.size || '400px'
})`
	max-width: 100vw;
	height: auto;
	width: ${props => props.size}
	object-fit:scale-down;
	max-height: -webkit-fill-available;
`
