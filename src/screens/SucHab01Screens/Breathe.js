import React from 'react'
import { View, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PromptContainer from '../../components/PromptContainer'
import Breathe from '../../components/Breathe'
import Breather2 from '../../components/Breathe/Breather2'
const windowHeight = Dimensions.get('window').height

const PromptAudio = ({ route }) => {
  const navigation = useNavigation()
  const {
    prompts,
    state: { responses }
  } = route.params
  const prompt = prompts[responses]

  const breathe = () => {
    return (
      <View
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          flex: 1,
          alignItems: 'center'
        }}>
        <Breathe
          breather={Breather2}
          contemplationPrompt={prompt.contemplation}
        />
      </View>
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
        prompt={prompt.prompt}
        input={breathe}
        handleNext={() => {
          navigation.navigate('PromptAudio', { ...route.params })
        }}
        handleBack={() =>
          navigation.navigate('PreActivity', { ...route.params })
        }
      />
    </View>
  )
}

export default PromptAudio
