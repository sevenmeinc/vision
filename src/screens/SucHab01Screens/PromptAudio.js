import React, { useState } from 'react'
import { View, Dimensions, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PromptContainer from '../../components/PromptContainer'
import Breathe from '../../components/Breathe'
import Breather2 from '../../components/Breathe/Breather2'
import AuxRecorderPlayer from '../../components/AudioRecorderPlayer'
import Space from '../../components/Space'
const windowHeight = Dimensions.get('window').height

const PromptAudio = ({ route }) => {
  const navigation = useNavigation()
  const { prompts, responses } = route.params
  const prompt = prompts[responses.length]
  const [didBreathe, setDidBreathe] = useState(false)

  const breatheAudio = () => {
    return (
      <>
        {!didBreathe ? (
          <Breathe
            breather={Breather2}
            contemplationPrompt={prompt.contemplation}
          />
        ) : (
          <View
            style={{
              paddingTop: 20,
              flex: 1,
              alignItems: 'center'
            }}>
            <Text>{prompt.prompt}</Text>
            <Space index={16} />
            <AuxRecorderPlayer
              handleText={() => {
                // TODO navigate sending didBreathe
                console.log('handleText')
              }}
              handleVideo={() => {
                // TODO navigate sending didBreathe
                console.log('handleVideo')
              }}
            />
          </View>
        )}
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
          !didBreathe && setDidBreathe(true)
        }}
        handleBack={() =>
          navigation.navigate('PreActivity', { ...route.params })
        }
      />
    </View>
  )
}

export default PromptAudio
