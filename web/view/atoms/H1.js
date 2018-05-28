import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.h1`
font-family: 'Athiti', sans-serif;
font-size: 1.5em;
color: ${props=>props.color? props.color :color.primary};
font-size: ${props=>props.fontSize? props.fontSize :'1.5em'};
${props=> props.textShadow? `text-shadow:${props.textShadow};`:null}
text-align: ${props => props.left? 'left': null};
${props=> props.padding? `padding: ${props.padding};`:null}
${props=> props.margin? `margin: ${props.margin};`:null}
${props=> props.rotate? `
/* Safari */
-webkit-transform: rotate(${props.rotate}deg);

/* Firefox */
-moz-transform: rotate(${props.rotate}deg);

/* IE */
-ms-transform: rotate(${props.rotate}deg);

/* Opera */
-o-transform: rotate(${props.rotate}deg);

`:null}
`
