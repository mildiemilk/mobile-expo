import styled from 'styled-components'
import MainImageArea from '../atoms/MainImageArea'

export default styled.div`
display: none;
white-space: nowrap; 
color: white;
font-size: 50px;
position: absolute;
color: #ccc;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
${MainImageArea}: hover & {
	display: block;
	cursor:pointer;
}
`
