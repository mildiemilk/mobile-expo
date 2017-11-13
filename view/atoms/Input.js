import styled from 'styled-components'
import color from '../../static/json/color.json'

const Input = styled.input`
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


export default field => {
	console.log(field)
	return(
	<div className="input-row">
		<Input {...field.input} type="text" />
		{field.meta.touched && field.meta.error && 
		 <span className="error">{field.meta.error}</span>}
	</div>
)}
