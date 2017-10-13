import styled from 'styled-components'

export default styled.div.attrs({
	maxSize: props => props.maxSize || '400px'
})`
max-width: ${props => props.minSize || '400px'};
max-height: ${props => props.minSize || '400px'};
height: ${props => props.minSize || '400px'};
width: 100%;
`
