import styled from 'styled-components'

export default styled.div`
display: none;
width: 100%;
height: 0px;
border: dashed 5pt #ccc;
z-index:1;
${MainImageArea}:hover & {
	display:block;
	height: -webkit-fill-available;
	cursor:pointer;
}
`
