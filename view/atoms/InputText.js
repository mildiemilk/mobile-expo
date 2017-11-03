import styled from 'styled-components'
import { Field } from 'redux-form'

export default styled(Field).attrs({
	component: 'input',
	type:"text"
})`
	width: -webkit-fill-available;
	margin: 1%;
	padding: 10px;
	color: #8f8d8b;
	border-left: 2px solid #94002a;
	border-bottom: 2px solid #94002a;
	border-top: 1px solid #f1f1f1;
	border-radius: 5px;
	outline: none;
	${props => props.width? 'width:'+props.width +';' : null}
	&:focus{
		box-shadow: -1px 1px 2px #8f8d8b;
		border: 2px solid #94002a;
	}
	&:not:focus{
		padding-top:2px;
	}
	&::placeholder {
		color: #a8a8a8;
	}
`
