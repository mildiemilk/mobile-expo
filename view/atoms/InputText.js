import styled from 'styled-components'
import { Field } from 'redux-form'
import color from '../../static/json/color.json'

export default styled(Field).attrs({
	component: 'input',
	type:"text"
})`
	width: -webkit-fill-available;
	margin: 1%;
	padding: 5px;
	color: ${color.darkText};
	border-left: 1px solid ${color.lightPrimary};
	border-bottom: 1px solid ${color.lightPrimary};
	border-top: 1px solid #f1f1f1;
	border-radius: 2px;
	outline: none;
	${props => props.width? 'width:'+props.width +';' : null}
	&:focus{
		box-shadow: -1px 1px 2px ${color.lightPrimary};
		border: 1px solid ${color.lightPrimary};
	}
	&:not:focus{
		padding-top:2px;
	}
	&::placeholder {
		color: #a8a8a8;
	}
`
