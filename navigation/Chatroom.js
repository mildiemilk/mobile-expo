import React from 'react'
import { View, Text, FlatList } from 'react-native'

export default props => <View>
    <Text>Chatroom</Text>
    {console.log(props.navigation.state.params)}
    <FlatList 
        data={props.navigation.state.params.chats}
        renderItem={({item}) => <Text>{item.message}</Text>}
    />
</View>