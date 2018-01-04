import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import color from '../../static/json/color.json'

export default styled(Dropzone)`
max-width: ${props => props.size || '400px'};
max-height: ${props => props.size || '400px'};
margin-top: ${props => props.marginTop || '0px'};
width: 100%;
height:auto;
`
