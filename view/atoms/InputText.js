import styled from 'styled-components'

export default styled.input`
	width: -webkit-fill-available;
	margin: 1%;
	padding: 10px;
	color: #8f8d8b;
	box-shadow: -1px 1px 1px #8f8d8b;
	border-left: 2px solid #94002a;
	border-bottom: 2px solid #94002a;
	border-top: 1px solid #f1f1f1;
	border-radius: 5px;
	outline: none;
	&:focus{
		ttransition: .5s ease;
		border: 2px #94002a solid;
	}
`
