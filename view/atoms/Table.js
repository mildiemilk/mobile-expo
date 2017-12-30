import styled from 'styled-components'

export default styled.table `
	text-align: left;
	${props => props.textAlign? `text-align: ${props.textAlign};`: 'left'}
	${props => props.marginTop? `margin-top: ${props.marginTop};`: null}
	border-radius: 25px;
	border-spacing: 0;
	border-collapse: collapse;
	width: 100%;
	table-layout: fixed;
	th {
		background: #89C4F4;
		padding: 10px;
	
	}
	td{
		background: #e7f3fc;
		padding: 10px;
		width: 8vw;
		min-width: 70px;
	}
	td:hover {background-color: #b8dbf8}
	overflow-x: scroll;
	${props => props.maxWidth
		? 'max-width:' + props.maxWidth + ';'
		: null}
	${props => props.maxHeight
				? 'max-height:' + props.maxHeight + ';'
				: null}
`
