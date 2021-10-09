import React from 'react'
import { View, Dimensions } from 'react-native'
import Breathe from '../../components/Breathe'
import ButtonBackNext from '../../components/ButtonBackNext'

const { height, width } = Dimensions.get('window')

const BreatheScreen = ({ prompt, handleNext }) => {
  return (
    <View
      style={{
        height: height,
        width: width,
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <Breathe contemplationPrompt={prompt.contemplation} />
      <ButtonBackNext handleNext={handleNext} />
    </View>
  )
}

export default BreatheScreen
