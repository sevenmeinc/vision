import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const Breathe = ({
  breather, //component
  contemplationPrompt = 'Breathing space'
}) => {
  return (
    <View
      style={{
        padding: 16,
        maxHeight: height / 5,
        alignContent: 'center'
      }}>
      <Text>{contemplationPrompt ?? 'Breathing space'}</Text>
      {breather()}
    </View>
  )
}

export default Breathe
