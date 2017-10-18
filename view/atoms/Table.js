import styled from 'styled-components'

export default styled.table `
	text-align: left;
	border-radius: 25px;
	width: 100%;
	th {
		background: #89C4F4;
		padding: 10px;
	}
	td{
		background: #e7f3fc;
		padding: 10px;
	}
	td:hover {background-color: #b8dbf8}
	${props => props.maxWidth
		? 'max-width:' + props.maxWidth + ';'
		: null}
	${props => props.maxHeight
				? 'max-height:' + props.maxHeight + ';'
				: null}
`
