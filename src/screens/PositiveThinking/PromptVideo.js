import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import VideoRec from '../../components/VideoRec'

const { width, height } = Dimensions.get('window')

const PromptVideo = ({ route, setDuration, time, setTime }) => {
  const { prompt, audioScreen, textScreen, previewScreen, setImgUri } =
    route.params
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
      <VideoRec
        prompt={prompt}
        audioScreen={audioScreen}
        textScreen={textScreen}
        setImgUri={setImgUri}
        setDuration={setDuration}
        time={time}
        setTime={setTime}
        previewScreen={previewScreen}
      />
    </View>
  )
}

export default PromptVideo
