import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.div`
align-self:stretch;
${props => props.position? `position: ${props.position};`:null}
${props => !props.noMargin? 'margin: 10px;' : null }
${props => props.padding? `padding: ${props.padding};`: 'padding: 10px;'}
${props => props.margin? `margin: ${props.margin};`: 'margin: 10px;'}
${props => props.top? `top: ${props.top};`: null}
${props => props.bottom? `bottom: ${props.bottom};`: null}
${props => props.left? `left: ${props.left};`: null}
${props => props.right? `right: ${props.right};`: null}
${props => !props.noBorderRadius?'border-radius: 3px;':'border-radius: 3px;'}
${props => !props.noBorder ?`border: 1px solid ${color.lightPrimary};`: 'border: 0;'}
${props => props.width? `width: ${props.width};`: null}
${props => props.height? `height: ${props.height};`: null}
${props => props.color? `color: ${props.color};`: null}
${props => props.maxWidth? `max-width: ${props.maxWidth};`: null}
${props => props.centerAll ? 'display: flex;justify-content: center;align-items: center;': null}
${props => props.flexColumn ? 'flex-direction: column;': null}
${props => props.height? `height: ${props.height};`: null}
${props => props.minWidth? `min-width: ${props.minWidth};`: null}
${props => props.minHeight? `min-height: ${props.minHeight};`: null}
${props => props.flexGrow ? 'flex-grow: 1;':null}
${props => props.absolute ? 'position: absolute; top: 40%;':null}
${props => props.backgroundColor? `background-color: ${props.backgroundColor};`: 'background-color: white;'}
${props => props.backgroundImage? `background-image: ${props.backgroundImage};`: null}
${props => props.boxShadow? `box-shadow: ${props.boxShadow};`:null}
${props => props.hover?`&:hover{background: ${color.lightPrimary};}`: null }

@media (min-width: 700px) {
        ${props => props.bigScreenWidth? `width: ${props.bigScreenWidth};`:null};
       
        ${props => props.maxWidth? `max-width: ${props.maxWidth};`:null};
}


@media (max-width: 700px) {
        ${props => props.widthSmall? `width: ${props.widthSmall};`:`width: 98%;`};
        ${props => props.paddingRight? `padding-right: ${props.paddingRight};`: null}
        ${props => props.padding? `padding: ${props.padding};`: 'padding: 5px 5px;'}
        margin:5px auto;
        .wraper-modal{
            width: 96.5%;
            margin:5px 0;
        }
        .wraper-modal-item{
            width: 100%;
            min-width:0
        }
}
@media (min-width: 481px) AND (max-width: 700px) {
	width: 100%;
}
`
