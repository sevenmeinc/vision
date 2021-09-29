import React from 'react'
import { View, Text } from 'react-native'

const GetStarted = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => props.navigation.navigate('Chat', { screen: 'Chat' })}>
        Get started
      </Text>
    </View>
  )
}

export default GetStarted
