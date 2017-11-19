import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.h3`
font-size: 1.25em;
color: ${color.darkPrimary};
margin: ${props => props.margin? +props.margin: '0'};
color: ${props=>props.color? props.color :color.darkPrimary};

`
