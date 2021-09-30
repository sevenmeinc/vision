import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const Breathe = ({
  breather, //component
  contemplationPrompt = 'default contemplation prompt'
}) => {
  return (
    <View
      style={{
        height: height / 3,
        alignContent: 'center'
      }}>
      <Text>{contemplationPrompt}</Text>
      {breather ? breather() : null}
    </View>
  )
}

export default Breathe
