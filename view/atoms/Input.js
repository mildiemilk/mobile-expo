import styled from 'styled-components'
import color from '../../static/json/color.json'

const Input = styled.input`

&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
color:${color.darkText};
border: none;
width: -webkit-fill-available;
margin: 10px;
padding: 5px;
outline: none;
border-radius: 3px;
background-color: #ffffff;
box-shadow: inset 1px 1px 1px 0px rgba(0, 0, 0, 0.33);
${props => props.fontSize? `font-size:${props.fontSize};` : null}
${props => props.width? `width:${props.width};` : null}
${props => props.maxWidth? `max-width:${props.maxWidth};`:null}
${props => props.flexGrow? `flexgrow:1;`:null}
&:focus{
	transition:0.5s;
	box-shadow:inset -1px -1px 1px 1px 	rgba(0, 0, 0, 0.33);
}
&:not:focus{
	padding-top:2px;
}
&::placeholder {
	color: #e4e4e4;
}
`


export default field => {
	console.log(field)
	return(
	<span className="input-row">
		<Input {...field.input} width={field.width} fontSize={field.fontSize} type={field.type || "text"} min={field.min} max={field.max} placeholder={field.placeholder ||""}/>
		{field.meta.touched && field.meta.error && 
		 <span className="error">{field.meta.error}</span>}
	</span>)
}