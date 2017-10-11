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
&:hover {
		background: ${color.lightPrimary};
		color: ${color.darkPrimary};
		box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
		transition: 0.3s;
		z-index:10;
	}
`
