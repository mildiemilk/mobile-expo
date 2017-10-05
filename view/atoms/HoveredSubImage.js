import styled from 'styled-components'

export default styled.div`
color: black;
display: none;
width: 100%;
height: 0px;
border: dashed 3pt #ccc;
z-index:1;
${SubImageWrap}:hover & {
display:block;
height: 76px;
cursor:pointer;
}
`
