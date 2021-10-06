import React from 'react'
import { View, Text, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const Breathe = ({
  breather, //component
  contemplationPrompt = 'Breathing space'
}) => {
  return (
    <View
      style={{
        padding: 16,
        width: width,
        alignContent: 'center',
        justifyContent: 'center'
      }}>
      <Text style={{ textAlign: 'center' }}>
        {contemplationPrompt ?? 'Breathing space'}
      </Text>
      {breather()}
    </View>
  )
}

export default Breathe
