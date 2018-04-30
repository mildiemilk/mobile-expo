import React from 'react';
import styled from 'styled-components/native'
import { TouchableHighlight } from 'react-native';
import { Flex } from  './Flex'
import { TextStyle } from './TextStyle'

const colors = {
  info: '#4065b3',
  google: '#d0021b',
  gmail: '#9013fe',
}
const ButtonContainer = styled.TouchableHighlight`
  width: 300px;
  height: 60px;
  border-radius: 30px;
  border: solid 5px;
  border-color:  ${props => props.color ? props.color : colors.info };
  margin: 15px;
`

const Label = styled(TextStyle)`
  font-weight: 700;
  font-size: 30px;
  align-self: center;
  padding: 5px;
`
const Button = (props) => {
  return (
      <ButtonContainer
          onPress={props.onPress}
          color={props.color}
      >
          <Flex>
            <Label color={props.color}>
                {props.children}
            </Label>
          </Flex>
      </ButtonContainer>
  )
}

export default Button;