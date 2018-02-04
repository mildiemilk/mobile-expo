import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    justify-content: ${props => props.justContent};
    flex-wrap: ${props => props.wrap || 'wrap'};
    ${props => props.flexGrow? `flex-grow:${props.glexGrow};`:null}
    ${props => props.center ? 'justify-content:center;':null}
    ${props => props.verticleCenter ? 'align-items:center;':null}
    ${props => props.width ? 'width:'+props.width+';':null}
    ${props => props.height ? `height: ${props.height};`: null}
    ${props=> props.margin? `margin:${props.margin};`:null}
    ${props => props.minWidth? `min-width:${props.minWidth};`:null}
    ${props => props.position? `position:${props.position};`:null}
    ${props => props.onlyDesktop? `@media (max-width: 700px){display:none;}`:null}
    ${props => props.onlyMobile? `@media (min-width: 700px){display:none;}`:null}
`
