import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.div`
padding: 10px;
margin: 10px;
border-radius: 10px;
border: 0.5px solid ${color.lightPrimary};
${props => props.flexGrow ? 'flex-grow: 1;':null}
@media (min-width: 700px) {
        width: ${props => props.bigScreenWidth || 'unset'};
}
`
