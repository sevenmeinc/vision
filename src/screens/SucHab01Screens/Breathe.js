import React from 'react'
import { View, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PromptContainer from '../../components/PromptContainer'
import Breathe from '../../components/Breathe'
import Breather2 from '../../components/Breathe/Breather2'
import ButtonBackNext from '../../components/ButtonBackNext'

const { height, width } = Dimensions.get('window')

const BreatheScreen = ({ prompt, handleNext }) => {
  // console.log('*', prompt.contemplation)
  // const navigation = useNavigation()
  // const {
  //   prompts,
  //   state: { responses, stage }
  // } = route.params
  // const prompt = prompts[responses]

  // const breathe = () => {
  //   return (
  //     <View
  //       style={{
  //         width: width,
  //         paddingLeft: 16,
  //         paddingRight: 16,
  //         flex: 1,
  //         alignItems: 'center'
  //       }}>
  //       <Breathe
  //         breather={Breather2}
  //         contemplationPrompt={prompt.contemplation}
  //       />
  //     </View>
  //   )
  // }

  return (
    <View
      style={{
        height: height,
        width: width,
        padding: 16,
        flex: 1,
        alignItems: 'center',
        // backgroundColor: 'yellow',
        justifyContent: 'space-between'
      }}>
      {/* <PromptContainer
        prompt={prompt.prompt}
        input={breathe}
        route={route}
        handleNext={() => {
          navigation.navigate(stage === 0 ? 'PromptAudio1' : 'PromptAudio2', {
            ...route.params,
            state: { ...route.params.state, stage: stage + 1 }
          })
        }}
      /> */}
      <Breathe contemplationPrompt={prompt.contemplation} />
      <ButtonBackNext handleNext={handleNext}/>
    </View>
  )
}

export default BreatheScreen
