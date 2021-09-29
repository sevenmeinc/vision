import React from 'react'
import { View, Text } from 'react-native'

const Breathe = ({
  breather, //component
  contemplationPrompt = 'default contemplation prompt'
}) => {
  return (
    <View>
      <Text>{contemplationPrompt}</Text>
      {breather ? breather() : null}
    </View>
  )
}

export default Breathe
