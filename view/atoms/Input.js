import styled from 'styled-components'
import color from '../../static/json/color.json'

const Input = styled.input`

&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
border: 1px solid ${color.disabled};
color:${color.darkText};
width: -webkit-fill-available;
margin: 10px;
padding: 5px;
outline: none;
border-radius: 3px;
background-color: #ffffff;
${props => props.fontSize? `font-size:${props.fontSize};` : null}
${props => props.width? `width:${props.width};` : null}
${props => props.maxWidth? `max-width:${props.maxWidth};`:null}
${props => props.flexGrow? `flexgrow:1;`:null}
&:focus{
	border: 1px solid ${color.primary1};
}
&:not:focus{
	padding-top:2px;
}
&::placeholder {
	color: #e6e6e6;
}
`


export default field => 
	<span className="input-row">
		<Input {...field.input} width={field.width} fontSize={field.fontSize} type={field.type || "text"} min={field.min} max={field.max} placeholder={field.placeholder ||""}/>
		{field.meta.touched && field.meta.error && 
		 <span className="error">{field.meta.error}</span>}
	</span>
