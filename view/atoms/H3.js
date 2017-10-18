import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.h3`
font-size: 26pt;
color: ${color.darkPrimary};
margin: ${props => props.margin? +props.margin: '0'};
`
