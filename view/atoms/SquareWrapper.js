import styled from 'styled-components'

export default styled.div.attrs({
	maxSize: props => props.maxSize || '400px'
})`
	max-width: ${props => props.minSize || '400px'};
	max-height: ${props => props.minSize || '400px'};
	width: 100%;
	height:  ${props => props.minSize || '400px'};
	min-height: 300px;
	margin: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`
