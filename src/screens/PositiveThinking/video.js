import React, { useRef, useState } from 'react'
import { View, Button, SafeAreaView } from 'react-native'
import { Video } from 'expo-av'
import { useNavigation } from '@react-navigation/native'
import TapMoreWithBottomSheet from '../../components/TapMoreWithBottomSheet'

const VideoPage = () => {
  const [status, setStatus] = useState({})
  const video = useRef(null)
  const navigation = useNavigation()

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
        <Button
          title="Next"
          onPress={() => navigation.navigate('postVideo1')}
        />
      </View>
      <TapMoreWithBottomSheet />
    </SafeAreaView>
  )
}

export default VideoPage
