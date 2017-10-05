import styled from 'styled-components'

export default styled.div`
position: absolute;
display: none;
z-index:1;
color: #ccc;
top: 35%;
left: 35%;
font-size: 35pt; 
${SubImageWrap}:hover & {
display:block;
height: 76px;
cursor:pointer;
}
`
