import React, { useRef, useState, useMemo } from 'react'
import { View, Button, SafeAreaView } from 'react-native'
import { Video } from 'expo-av'
import VideoEndedContent from '../../components/VideoEndedContent'
import VideoPausedContent from '../../components/VideoPausedContent'

const styles = {
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black',
    width: '100%'
  }
}

export const millisToMinutesAndSeconds = (millis) => {
  let minutes = Math.floor(millis / 60000)
  let seconds = ((millis % 60000) / 1000).toFixed(0)
  return seconds === 60
    ? minutes + 1 + ':00'
    : minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}
const VideoPage = () => {
  const [opacity, setOpacity] = useState(false)
  const [status, setStatus] = useState({})
  const [finish, setFinish] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const video = useRef(null)
  //   console.log(millisToMinutesAndSeconds(videoDuration))
  const time = useMemo(
    () => millisToMinutesAndSeconds(videoDuration),
    [videoDuration]
  )

  const _onPlaybackStatusUpdate = (playbackStatus) => {
    setVideoDuration(() => playbackStatus.durationMillis)
    setStatus(() => playbackStatus)
    if (!playbackStatus.isLoaded) {
      // Update your UI for the unloaded state
      if (playbackStatus.error) {
        // error loading video file
      }
    } else {
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        // The player has just finished playing and will stop.
        setFinish(true)
      }
    }
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: !status.isPlaying ? 'black' : 'white'
      }}>
      <View style={{ flex: 1 }}>
        <Video
          ref={video}
          style={{ flex: 1 }}
          source={{
            uri: 'https://content-stage.seven-internal.me/media/original_videos/Habits.mp4'
          }}
          useNativeControls
          resizeMode="contain"
          onPlaybackStatusUpdate={_onPlaybackStatusUpdate}
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

        {!status.isPlaying && (
          <View style={[styles.overlay, { opacity: !opacity ? 0.8 : 1 }]}>
            {finish ? (
              <VideoEndedContent
                handleContinue={() => {}}
                handleLater={() => {}}
              />
            ) : (
              <VideoPausedContent
                title="Part 01"
                subTitle="Benefits of Positive Thinking"
                time={time}
                onPressPlay={() => video.current?.playAsync()}
                onOpen={() => setOpacity(true)}
                onClose={() => setOpacity(false)}
                hideTapMore={false}
              />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default VideoPage
