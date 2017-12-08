import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    flex-wrap: wrap;
    ${props => props.center ? 'justify-content:center;':null}
    ${props => props.verticleCenter ? 'align-items:center;':null}
    ${props => props.width ? 'width:'+props.width+';':null}
    ${props => props.height ? `height: ${props.height};`: null}
`
