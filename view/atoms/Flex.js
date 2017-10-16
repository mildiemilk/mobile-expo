import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    flex-wrap: wrap;
    ${props => props.center ? 'justify-content:center;':null}
`