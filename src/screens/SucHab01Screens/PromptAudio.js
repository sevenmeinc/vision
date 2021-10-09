import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AuxRecorderPlayer from '../../components/AudioRecorderPlayer'
import ButtonBackNext from '../../components/ButtonBackNext'

const PromptAudio = ({ prompt, textScreen, videoScreen, handleNext }) => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        padding: 16,
        paddingTop: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <Text style={{ padding: 16 }}>{prompt}</Text>
      <AuxRecorderPlayer
        handleText={() => {
          navigation.navigate(textScreen)
        }}
        handleVideo={() => {
          navigation.navigate(videoScreen)
        }}
      />
      <ButtonBackNext handleNext={handleNext} />
    </View>
  )
}

export default PromptAudio
