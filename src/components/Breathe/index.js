import React from 'react'
import { View, Text, Dimensions } from 'react-native'
// import ButtonBackNext from '../ButtonBackNext'
import Breathe2 from './Breather2'

const { width, height } = Dimensions.get('window')

const Breathe = ({ contemplationPrompt }) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        width: width,
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
      <Text style={{ textAlign: 'center' }}>
        {contemplationPrompt ?? 'Breathing space'}
      </Text>
      <Breathe2 />
      {/* <ButtonBackNext /> */}
    </View>
  )
}

export default Breathe
