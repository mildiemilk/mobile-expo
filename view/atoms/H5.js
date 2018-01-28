import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.h5`
    margin: ${props => props.margin? props.margin: '0'};
    line-height: ${props => props.lineHeight? props.lineHeight: '0'};
    color: ${props=>props.color? props.color :color.primary1}; 
    text-align: ${props => props.left? 'left': null};
    text-align: ${props => props.center? 'center': null};
`