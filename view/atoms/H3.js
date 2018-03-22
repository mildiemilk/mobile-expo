import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.h3`
font-family: 'Athiti', sans-serif;
font-size: 1.25em;
${props=> props.zIndex? `z-index:${props.zIndex};`: null}
color: ${props => props.color? props.color: color.primary};
${props => props.margin? `margin: ${props.margin};`: null};
${props => props.padding? `padding: ${props.padding};`: null};
color: ${props=>props.color? props.color :color.primary};

`
