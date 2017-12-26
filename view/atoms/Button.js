import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.button`
border: none;
display: inline-block;
outline: 0;
padding: 8px 16px;
vertical-align: middle;
overflow: hidden;
text-decoration: none;
text-align: center;
cursor: pointer;
white-space: nowrap;
flex-grow: 1;
${props=> props.maxWidth? `max-width:${props.maxWidth};`:null}
${props=> props.minWidth? `min-width:${props.minWidth};`:null}
${props=> props.margin? `margin:${props.margin};`:null}
background: ${props => props.background? props.background : color.contrastPrimary};
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
		${props => props.mobileFixedButtom ? "position:fixed;width:100%vw;bottom:0px":null}
	}
	${props => props.round? 'border-radius: 18px;': null}
	&:hover {
		background:${props => props.hoverBg? props.hoverBg:color.primary1};
		color: white;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.19);
		transition: 0.1s;
		z-index:10;
	}
${props => props.modalClose? 'position: fixed;right: 10%;': null}	
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
`
