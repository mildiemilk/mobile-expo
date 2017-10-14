import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import color from '../../static/json/color.json'

export default styled(Dropzone).attrs({
    size: props => props.size || '400px'
})`
max-width: ${props => props.size || '400px'};
max-height: ${props => props.size || '400px'};
width: 100%;
height:auto;
`
