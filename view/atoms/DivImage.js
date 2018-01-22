import styled from 'styled-components'

export default styled.div`
position: relative;
width: 100%;
border: solid 1px;
height: 150px;
display: flex;
margin: 5px 0px;
${props => props.center ? "justify-content: center;align-items: center;":null}
`