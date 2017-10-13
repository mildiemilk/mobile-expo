import styled from 'styled-components'

export default styled.div.attrs({
	maxSize: props => props.maxSize || '400px'
})`
	max-width: ${props => props.maxSize};
	max-height: ${props => props.maxSize};
	width: ${props => props.maxSize};
	height:  ${props => props.maxSize};
	min-height: 300px;
`
