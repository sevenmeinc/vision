import React, { useEffect } from 'react'
import { SafeAreaView, Dimensions } from 'react-native'
import Breathe from '../../components/Breathe'
import ButtonBackNext from '../../components/ButtonBackNext'

const { height, width } = Dimensions.get('window')

const BreatheScreen = ({
  prompt,
  handleNext,
  setImgUri,
  setDuration,
  setTime
}) => {
  useEffect(() => {
    setImgUri(null)
    setDuration({ min: 0, sec: 0 })
    setTime({ min: 0, sec: 0 })
  }, [setImgUri, setDuration, setTime])

  return (
    <SafeAreaView
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
    </SafeAreaView>
  )
}

export default BreatheScreen
