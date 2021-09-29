import React from 'react'
import { View, Text } from 'react-native'

const Chat = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => props.navigation.navigate('BenefitList')}>Chat</Text>
    </View>
  )
}

export default Chat
