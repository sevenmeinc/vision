import React, { useState, useEffect } from 'react'
import {
  View,
  Dimensions,
  // TouchableOpacity,
  // Image,
  // Text,
  StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import FeatherIcons from 'react-native-vector-icons/Feather'
// import PromptContainer from '../../components/PromptContainer'
import VideoRec from '../../components/VideoRec'
// import Space from '../../components/Space'
// import ButtonBackNext from '../../components/ButtonBackNext'
// import PreviewScreen from './PreviewScreen'

const { width, height } = Dimensions.get('window')

const PromptVideo = ({ prompt, setIsPreview, audioScreen, textScreen }) => {
  // const navigation = useNavigation()

  // const {
  //   prompts,
  //   state: { responses, stage }
  // } = route.params
  // const prompt = prompts[responses]
  const newTimer = { min: 0, sec: 0 }

  const [imgUri, setImgUri] = useState(null)
  const [preview, setPreview] = useState(false)
  const [duration, setDuration] = useState(newTimer)
  const [time, setTime] = useState(newTimer)

  // const handleAudio = () => {
  //   navigation.navigate(stage === 1 ? 'PromptAudio1' : 'PromptAudio2', {
  //     ...route.params
  //   })
  // }
  // const handleText = () => {
  //   navigation.navigate(stage === 1 ? 'PromptText1' : 'PromptText2', {
  //     ...route.params
  //   })
  // }

  useEffect(() => {
    setIsPreview(preview)
  })

  const styles = StyleSheet.create({
    centered: { alignItems: 'center', justifyContent: 'center' },
    buttonContainer: {
      flex: 0.4,
      width: '66%',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 20
    }
  })

  return (
    <View
      style={{
        ...styles.centered,
        height: height,
        width: width,
        flex: 1
      }}>
      {/* bring in prompt here */}
      <VideoRec
        prompt={prompt}
        handleAudio={audioScreen}
        handleText={textScreen}
        setImgUri={setImgUri}
        setPreview={setPreview}
        setDuration={setDuration}
        time={time}
        setTime={setTime}
      />
    </View>
  )
}

export default PromptVideo
