import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.h1`
font-size: 1.5em;
color: ${props=>props.color? props.color :color.primary1};
${props=> props.textShadow? `text-shadow:${props.textShadow};`:null}
text-align: ${props => props.left? 'left': null};
${props=> props.padding? `padding: ${props.padding};`:null}
${props=> props.margin? `margin: ${props.margin};`:null}
`
