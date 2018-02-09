import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.button`
border: none;
display: inline-block;
${props=> props.topRight? 'position:absolute;top:0;right:0;': null}
${props=> props.relative? 'position:relative;': null}
outline: 0;
padding: ${props => props.padding? props.padding:'8px 16px'};
max-height: 50px;
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
${props=> props.maxWidth? `max-width:${props.maxWidth};`:null}
${props=> props.minWidth? `min-width:${props.minWidth};`:null}
${props=> props.margin? `margin:${props.margin};`:null}
background: ${props => props.background? props.background : color.contrast};
${props => props.border ?`border: ${props.border};` : null}
color: ${props => props.textColor? props.textColor: color.lightPrimary};
${props=> props.buttonDisabled ? `background:darkgray !important;`:null}
${props => props.fullWidth ? 
	'width:100%;' : null}
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
${props => props.modalClose? 'position: absolute;': null}	
`
export const DivButton = styled.div`
	height: 32px;
	display: flex;
	justify-content: flex-end;

`

export const ButtonGroup = styled.div`
	display:flex;
	justify-content: center;
	flex-wrap: wrap;
	button:not(:last-child) {
		border-right: 0px;
	}
	button:first-child {
		border-radius: 5px 0px 0px 5px;
	}
	button: last-child {
		border-radius: 0px 5px 5px 0px;
	}
	${props => props.disabled? 'pointer-events: none;': null}
`
