import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    flex-wrap: ${props => props.wrap || 'wrap'};
    ${props => props.flexGrow? `flex-grow:${props.glexGrow};`:null}
    ${props => props.center ? 'justify-content:center;':null}
    ${props => props.verticleCenter ? 'align-items:center;':null}
    ${props => props.width ? 'width:'+props.width+';':null}
    ${props => props.height ? `height: ${props.height};`: null}
    ${props=> props.margin? `margin:${props.margin};`:null}
    ${
        props => 
            props.minWidth? 
            `min-width:${props.minWidth};`:null
    }
`
