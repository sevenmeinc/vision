import React from 'react'
import { SafeAreaView, Dimensions, StyleSheet } from 'react-native'
import VideoRec from '../../components/VideoRec'

const { width, height } = Dimensions.get('window')

const PromptVideo = ({
  prompt,
  audioScreen,
  textScreen,
  previewScreen,
  setImgUri,
  setDuration,
  time,
  setTime
}) => {
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
    <SafeAreaView
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
    </SafeAreaView>
  )
}

export default PromptVideo
