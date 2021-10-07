import React, { useRef, useState } from 'react'
import { View, Button, SafeAreaView } from 'react-native'
import { Video } from 'expo-av'
import TapMoreWithBottomSheet from '../../components/TapMoreWithBottomSheet'

const VideoPage = () => {
  const [status, setStatus] = useState({})
  const video = useRef(null)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Video
        ref={video}
        style={{ flex: 1 }}
        source={{
          uri: 'https://content-stage.seven-internal.me/media/original_videos/Habits.mp4'
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
      <TapMoreWithBottomSheet />
    </SafeAreaView>
  )
}

export default VideoPage
