import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.div`
padding: 10px;
${props => !props.noMargin? 'margin: 10px;' : null }
${props => !props.noBorderRadius?'border-radius: 10px;':null}
${props => !props.noBorder ?`border: 2px solid ${color.primary1};`: null}
${props => props.width? `width: ${props.width};`: null}
${props => props.color? `color: ${props.color};`: null}
${props => props.maxWidth? `max-width: ${props.maxWidth};`: null}
${props => props.centerAll ? 'display: flex;justify-content: center;align-items: center;': null}
${props => props.height? `height: ${props.height};`: null}
${props => props.minWidth? `min-width: ${props.minWidth};`: null}
${props => props.minHeight? `min-height: ${props.minHeight};`: null}
${props => props.flexGrow ? 'flex-grow: 1;':null}
${props => props.backgroundColor? `background-color: ${props.backgroundColor};`: null}
${props => props.backgroundImage? `background-image: ${props.backgroundImage};`: null}
${props => props.boxShadow? `box-shadow: ${props.boxShadow};`:null}
@media (min-width: 700px) {
        width: ${props => props.bigScreenWidth || 'unset'};
}
${props => props.hover?`&:hover{background: ${color.lightPrimary};}`: null }

`
