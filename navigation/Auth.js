import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'
import styled from 'styled-components/native'
import Button from '../components/base/Button'
import { Card } from '../components/base/Card'
import { Flex } from '../components/base/Flex'
import { TextStyle } from '../components/base/TextStyle'
import { StackNavigator } from 'react-navigation'

export default props =><View>
<Flex justifyContent="space-between" height="100%">
  <Card backgroundColor="#f7626b" width="100%" height="200px">
    <Flex justifyContent="center" alignItems="center">
      <TextStyle color="white" fontSize="75px">แชร์มั้ย</TextStyle>
    </Flex>
  </Card>
  <View style={styles.container}>
    <Button color="#4065b3" onPress={()=> props.navigation.navigate('ChatLists')}>ล๊อคอิน facebook </Button>
    <Button color="#d0021b">ล๊อคอิน gmail </Button>
    <Button color="#9013fe">ล๊อคอิน email </Button>
  </View>
</Flex>
</View>

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginBottom: '10%',
    }
  })