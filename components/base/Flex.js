import styled from 'styled-components/native'

export const Flex = styled.View `
  display: flex;
  height:  ${props => props.height ? props.height : '100%' };
  ${(props) => props.alignContent &&`align-content: ${props.alignContent};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) => props.direction && `flex-direction: ${props.direction};`}
  ${(props) => props.flow && `flex-flow: ${props.flow};`}
  ${(props) => props.justifyContent && `justify-content: ${props.justifyContent};`}
`