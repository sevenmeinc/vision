import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Breathe2 from './Breather2'

const { width } = Dimensions.get('window')

const Breathe = ({ contemplationPrompt }) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        width: width,
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
      <Text
        style={{
          color: '#4D4D4D',
          fontFamily: 'SF Pro Text',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 19,
          letterSpacing: 0.01,
          textAlign: 'center'
        }}>
        {contemplationPrompt ?? 'Breathing space'}
      </Text>
      <Breathe2 />
    </View>
  )
}

export default Breathe
