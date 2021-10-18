import React, { useRef, useState, useMemo } from 'react'
import { View, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import { Video } from 'expo-av'
import { useNavigation } from '@react-navigation/native'
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
const VideoPage = ({ nextScreen, title, subTitle, hideTapMore }) => {
  const [opacity, setOpacity] = useState(false)
  const [status, setStatus] = useState({})
  const [finish, setFinish] = useState(false)
  const [skip, setSkip] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const video = useRef(null)
  const navigation = useNavigation()

  const time = useMemo(
    () => millisToMinutesAndSeconds(videoDuration),
    [videoDuration]
  )

  const handleReplay = (ref) => {
    ref.current.replayAsync()
    setSkip(false)
  }
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
        backgroundColor: 'black'
      }}>
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => video.current?.pauseAsync()}>
          <Video
            ref={video}
            style={{ flex: 1 }}
            source={{
              uri: 'https://content-stage.seven-internal.me/media/original_videos/Habits.mp4'
            }}
            resizeMode="contain"
            onPlaybackStatusUpdate={_onPlaybackStatusUpdate}
          />
        </TouchableWithoutFeedback>
        {!status.isPlaying && (
          <View style={[styles.overlay, { opacity: !opacity ? 0.8 : 1 }]}>
            {finish || skip ? (
              <VideoEndedContent
                handleContinue={() => navigation.navigate(nextScreen)}
                handleLater={() => navigation.navigate('positiveThinkingHome')}
                handleReplay={() => handleReplay(video)}
              />
            ) : (
              <VideoPausedContent
                title={title}
                subTitle={subTitle}
                time={time}
                onPressPlay={() => video.current?.playAsync()}
                onOpen={() => setOpacity(true)}
                onClose={() => setOpacity(false)}
                handleSkip={() => setSkip(true)}
                hideTapMore={hideTapMore}
              />
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default VideoPage
