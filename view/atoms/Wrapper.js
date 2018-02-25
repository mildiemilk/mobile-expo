import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.div`
background-color: white;
border: 1px solid #dddfe2;
border-radius: 3px;
${props => props.position? `position: ${props.position};`:null}
${props => !props.noMargin? 'margin: 10px;' : null }
margin: ${props => props.margin};
${props => props.padding? `padding: ${props.padding};`: 'padding: 10px;'}
${props => !props.noBorderRadius?'border-radius: 3px;':null}
${props => !props.noBorder ?`border: 1px solid ${color.lightPrimary};`: null}
${props => props.width? `width: ${props.width};`: null}
${props => props.color? `color: ${props.color};`: null}
${props => props.maxWidth? `max-width: ${props.maxWidth};`: null}
${props => props.centerAll ? 'display: flex;justify-content: center;align-items: center;': null}
${props => props.flexColumn ? 'flex-direction: column;': null}
${props => props.height? `height: ${props.height};`: null}
${props => props.minWidth? `min-width: ${props.minWidth};`: null}
${props => props.minHeight? `min-height: ${props.minHeight};`: null}
${props => props.flexGrow ? 'flex-grow: 1;':null}
${props => props.backgroundColor? `background-color: ${props.backgroundColor};`: null}
${props => props.backgroundImage? `background-image: ${props.backgroundImage};`: null}
${props => props.boxShadow? `box-shadow: ${props.boxShadow};`:null}
@media (min-width: 700px) {
        ${props => props.bigScreenWidth? `width: ${props.bigScreenWidth};`:null};
        min-width: 340px;
}

${props => props.hover?`&:hover{background: ${color.lightPrimary};}`: null }

@media (max-width: 700px) {
	width: 100%;
}
`
