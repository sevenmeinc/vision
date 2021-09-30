import React, { useState } from 'react'
import { View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PromptContainer from '../../components/PromptContainer'
import VideoRec from '../../components/VideoRec'
const windowHeight = Dimensions.get('window').height

const PromptVideo = ({ route }) => {
  const navigation = useNavigation()
  const { prompts, responses } = route.params
  const prompt = prompts[responses.length]
  const newTimer = { min: 0, sec: 0 }

  const [imgUri, setImgUri] = useState(null)
  const [preview, setPreview] = useState(false)
  const [videoDuration, setVideoDuration] = useState(newTimer)

  const video = ({ imgUri, setImgUri, preview, setPreview }) => {
    return (
      <>
        {preview ? (
          <View style={{ zIndex: 310 }}>
            <TouchableOpacity
              onPress={() => {
                setPreview(false)
                setImgUri(null)
              }}>
              <Image
                source={imgUri}
                style={{ flex: 1, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <VideoRec
            route={{
              ...route.params,
              state: {
                setImgUri,
                prompt: prompts[responses.length],
                setDuration: setVideoDuration
              }
            }}
          />
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
        input={video}
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

export default PromptVideo
