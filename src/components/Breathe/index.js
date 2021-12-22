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
          fontSize: 17,
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 20.29,
          letterSpacing: -0.01,
          textAlign: 'center',
          color: '#16161A',
          marginBottom: 12
        }}>
        {contemplationPrompt?.title ?? 'Breathing space'}
      </Text>
      <Text
        style={{
          color: '#4D4D4D',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 19,
          letterSpacing: 0.01,
          textAlign: 'center'
        }}>
        {contemplationPrompt?.description ??
          'Take a moment to relax and breathe.'}
      </Text>
      <Breathe2 />
    </View>
  )
}

export default Breathe
