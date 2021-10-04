import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PromptContainer from '../../components/PromptContainer'
import AuxRecorderPlayer from '../../components/AudioRecorderPlayer'
import Space from '../../components/Space'
const windowHeight = Dimensions.get('window').height

const PromptAudio = ({ route }) => {
  const navigation = useNavigation()
  const {
    prompts,
    state: { responses }
  } = route.params
  const prompt = prompts[responses]

  const breatheAudio = () => {
    return (
      <>
        <View
          style={{
            padding: 16,
            flex: 1,
            alignItems: 'center'
          }}>
          <Text style={{ padding: 16 }}>{prompt?.prompt}</Text>
          <Space index={16} />
          <AuxRecorderPlayer
            handleText={() => {
              navigation.navigate('PromptText', {
                ...route.params
              })
            }}
            handleVideo={() => {
              navigation.navigate('PromptVideo', {
                ...route.params
              })
            }}
          />
        </View>
      </>
    )
  }

  return (
    <View
      style={{
        height: windowHeight,
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <PromptContainer
        prompt={prompt}
        input={breatheAudio}
        handleNext={() => {
          if (prompts.length === responses + 1) {
            navigation.navigate('PostActivity', { ...route.params })
          } else {
            navigation.navigate('Breathe', {
              ...route.params,
              state: { responses: responses + 1 }
            })
          }
        }}
        handleBack={() =>
          navigation.navigate('PreActivity', { ...route.params })
        }
      />
    </View>
  )
}

export default PromptAudio
