import styled from 'styled-components/native'


export const Card = styled.View`
${(props) => props.width &&`width: ${props.width};`}
${(props) => props.height &&`height: ${props.height};`}
${(props) => props.backgroundColor &&`background-color: ${props.backgroundColor};`}
`