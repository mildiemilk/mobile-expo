import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.h1`
font-size: 1.5em;
color: ${props=>props.color? props.color :color.darkPrimary};
${props=> props.textShadow? `text-shadow:${props.textShadow};`:null}
`
