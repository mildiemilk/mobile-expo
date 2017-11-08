import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.div`
padding: 10px;
margin: 10px;
border-radius: 10px;
border: 0.5px solid ${color.lightPrimary};
${props => props.width? `width: ${props.width};`: null}
${props => props.centerAll ? 'display: flex;justify-content: center;align-items: center;': null}
${props => props.height? `height: ${props.height};`: null}
${props => props.minWidth? `min-width: ${props.minWidth};`: null}
${props => props.minHeight? `min-height: ${props.minHeight};`: null}
${props => props.flexGrow ? 'flex-grow: 1;':null}
@media (min-width: 700px) {
        width: ${props => props.bigScreenWidth || 'unset'};
}
${props => props.hover?`&:hover{background: ${color.lightPrimary};}`: null }

`
