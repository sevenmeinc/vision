import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PromptContainer from '../../components/PromptContainer'
import AuxRecorderPlayer from '../../components/AudioRecorderPlayer'
import Space from '../../components/Space'

const { height } = Dimensions.get('window')

const PromptAudio = ({ route, textScreen, videoScreen }) => {
  const navigation = useNavigation()
  const {
    prompts,
    state: { responses, stage }
  } = route.params

  const prompt = prompts[responses]

  const Audio = () => {
    return (
      <View
        style={{
          padding: 16,
          paddingTop: 0,
          flex: 1,
          alignItems: 'center'
        }}>
        <Text style={{ padding: 16 }}>{prompt?.prompt}</Text>
        <Space index={16} />
        <AuxRecorderPlayer
          handleText={() => {
            navigation.navigate(textScreen, {
              ...route.params
            })
          }}
          handleVideo={() => {
            navigation.navigate(videoScreen, {
              ...route.params
            })
          }}
        />
      </View>
    )
  }

  return (
    <View
      style={{
        height: height,
        padding: 16,
        paddingTop: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <PromptContainer input={Audio} route={route} />
    </View>
  )
}

export default PromptAudio
