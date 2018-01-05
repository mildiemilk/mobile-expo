import styled from 'styled-components'
import color from '../../static/json/color.json'

export default styled.table `
	text-align: left;
	${props => props.textAlign? `text-align: ${props.textAlign};`: 'left'}
	${props => props.marginTop? `margin-top: ${props.marginTop};`: null}
	border-spacing: 0;
	border-collapse: collapse;
	width: 100%;
	table-layout: fixed;
	th {
		background: ${color.contrastPrimary};
		color: ${color.gray};
		padding: 10px;
	
	}
	td{
		background: ${color.primary1};
		padding: 0px 0px 10px;
		width: 8vw;
		min-width: 70px;
	}
	tr:hover {
		filter: brightness(110%);		
	}
	overflow-x: scroll;
	${props => props.maxWidth
		? 'max-width:' + props.maxWidth + ';'
		: null}
	${props => props.maxHeight
				? 'max-height:' + props.maxHeight + ';'
				: null}
`
