import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.button`

border: none;
display: inline-block;
${props=> props.relative? 'position:relative;': null}
${props=> props.fontWeight? `font-weight:${props.fontWeight};`: 'font-weight:600;'}
${props=> props.fontSize? `font-size:${props.fontSize};`: 'font-size:140%;'}
${props=> props.position? `position:${props.position};`: null}
outline: 0;
padding: ${props => props.padding? props.padding:'16px 16px'};
${props=> props.nonMaxHeight?  null:`max-height:50px;`}
vertical-align: middle;
overflow: hidden;
text-decoration: none;
text-align: ${props=> props.textAlign? props.textAlign:'center'};
cursor: pointer;
white-space: nowrap;
${props=> props.noFlexGrow? `flex-grow:inherit;`:`flex-grow: 1;`}
${props=> props.zIndex? `z-index:${props.zIndex};`:null}
${props=> props.width? `width:${props.width};` :null}
${props=> props.height? `height:${props.height};` :null}
${props=> props.borderRadius? `border-radius:${props.borderRadius};` :null}
${props=> props.maxWidth? `max-width:${props.maxWidth};`:null}
${props=> props.minWidth? `min-width:${props.minWidth};`:null}
${props=> props.margin? `margin:${props.margin};`:null}
${props=> props.right? `right:${props.right};`:null}
${props=> props.float? `float:${props.float};`:null}
${props=> props.top? `top:${props.top};`:null}
background: ${props => props.background? props.background : color.contrast};
${props => props.border ?`border: ${props.border};` : null}
${props=> props.buttonDisabled ? `background:darkgray !important;`:null}
color: ${props => props.textColor? props.textColor: color.lightPrimary};
${props=> props.secondary? `color:${color.contrast};background:white;border:2px solid ${color.contrast};padding:6px 16px;`:null}
${props => props.fullWidth ? 
	'width:100%;' : null}
${props => props.fullHeight ? 
	'height:100%;' : null}
${props => props.big ?
	'padding:20px;' :null
}
${props => props.color? 'border: 1px solid '+ props.color+';':null}
@media (max-width: 700px){
	${props => props.mobileFixedButtom ? "position:fixed;width:100vw;bottom:0;left:0;":null}
}
${props => props.round? 'border-radius: 18px;': null}
&:hover {
	filter: brightness(110%);
	box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.19);
	transition: 0.1s;
	z-index:10;
}
${props => props.boxShadow ? `
-webkit-box-shadow: ${props.boxShadow};
-moz-box-shadow: ${props.boxShadow};
box-shadow: ${props.boxShadow};
`:null}

`
export const DivButton = styled.div`
	height: 32px;
	display: flex;
	justify-content: flex-end;
	max-width: 32px;
	right:0;
`

export const ButtonGroup = styled.div`
	padding:0;
	margin:0;
	display:flex;
	flex-flow:row wrap;
	button:not(:last-child) {
		border-right: 0px;
	}
	button:first-child {
		border-radius: 5px 0px 0px 5px;
		margin-left:0;
	}
	button:last-child {
		border-radius: 0px 5px 5px 0px;
		margin-right:0;
	}
	${props => props.disabled? 'pointer-events: none;': null}
`
