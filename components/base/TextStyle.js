import styled from 'styled-components/native'

export const TextStyle = styled.Text`
${(props) => props.color &&`color: ${props.color};`}
${(props) => props.fontSize &&`font-size: ${props.fontSize};`}
fontFamily: 'SukhumvitSet-Text';
`