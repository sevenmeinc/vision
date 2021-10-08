import React, { useRef, useState, useMemo } from 'react'
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import { Video } from 'expo-av'
import { Feather, Ionicons } from '@expo/vector-icons'

import TapMoreWithBottomSheet from '../../components/TapMoreWithBottomSheet'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'

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

const FinishOverlay = ({ handleContinue, handleLater }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
      }}>
      <View style={{ flex: 1, marginTop: 32 }}>
        <Logo fill="white" />
        <View style={{ backgroundColor: 'black' }}>
          <Text
            style={{
              color: '#fff',
              opacity: 1,
              marginTop: 32,
              fontFamily: 'medium',
              fontSize: 36
            }}>
            Ready to start?
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }}>
        <OutlineButton
          variant="light"
          title="Let's do it"
          onPress={handleContinue}
        />
        <View style={{ marginTop: 12 }} />
        <OutlineButton
          variant="light"
          title="I'll come back later"
          onPress={handleLater}
        />
      </View>
    </View>
  )
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
              <FinishOverlay handleContinue={() => {}} handleLater={() => {}} />
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={{
                      color: 'white',
                      marginTop: 32,
                      marginBottom: 24,
                      fontFamily: 'bold',
                      textTransform: 'uppercase',
                      fontSize: 17
                    }}>
                    Part 01
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontFamily: 'medium',
                      fontSize: 36,
                      textAlign: 'center',
                      marginBottom: 24
                    }}>
                    Benefits of Positive Thinking
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: '25%'
                    }}>
                    <Feather name="clock" size={15} color="white" />

                    <Text style={{ color: 'white', marginLeft: 4 }}>
                      {time}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => video.current?.playAsync()}>
                    <Ionicons
                      name="play-circle-outline"
                      size={120}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
                <TapMoreWithBottomSheet
                  variant="light"
                  onOpen={() => {
                    setOpacity(true)
                  }}
                  onClose={() => {
                    setOpacity(false)
                  }}
                />
              </View>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

export default VideoPage
