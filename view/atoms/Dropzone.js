import styled from 'styled-components'
import Dropzone from 'react-dropzone'
import color from '../../static/json/color.json'

export default styled(Dropzone).attrs({
    size: props => props.size || '400px'
})`
width: ${props => props.size || '400px'};
height: ${props => props.size || '400px'};
    &:hover {
        border: 2px solid ${color.lightPrimary};
    }
`
