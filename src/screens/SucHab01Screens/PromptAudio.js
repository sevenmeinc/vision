import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AuxRecorderPlayer from '../../components/AudioRecorderPlayer'
import ButtonBackNext from '../../components/ButtonBackNext'

const PromptAudio = ({ prompt, textScreen, videoScreen, handleNext }) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 16,
        paddingTop: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <Text
        style={{
          padding: 16,
          fontSize: 17,
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 20,
          letterSpacing: -0.01,
          textAlign: 'center'
        }}>
        {prompt}
      </Text>
      <AuxRecorderPlayer
        handleText={() => {
          navigation.navigate(textScreen)
        }}
        handleVideo={() => {
          navigation.navigate(videoScreen)
        }}
      />
      <ButtonBackNext handleNext={handleNext} />
    </SafeAreaView>
  )
}

export default PromptAudio
