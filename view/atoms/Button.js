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
background: ${color.contrastPrimary};
color: ${color.darkPrimary};
${props => props.fullWidth ? 
'width:100%;' : null}
${props => props.big ?
'padding:20px;' :null
}
${props => props.color? 'border: 1px solid '+ props.color+';background:none;':null}
@media (max-width: 700px){
	${props => props.mobileFixedButtom ? "position:fixed;width:100%vw;bottom:0px":null}
}
${props => props.round? 'border-radius: 5px;': null}
&:hover {
		background:${props => props.color? props.color:color.lightPrimary};
		color: white;
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
		transition: 0.3s;
		z-index:10;
	}
`

export const ButtonGroup = styled.div`
	display:flex;
	justify-content: center;
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
