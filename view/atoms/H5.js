import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.h5`
    margin: ${props => props.margin? +props.margin: '0'};
    color: ${props=>props.color? props.color :color.darkPrimary};    
`