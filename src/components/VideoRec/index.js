// TODO: apply styles.centered
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Camera } from 'expo-camera'
import Timer from '../AudioRecorderPlayer/Timer'
import styles from './styles'

const VideoRec = ({ route, state }) => {
  const navigation = useNavigation()
  const { prompt, handleAudio, handleText, setDuration } = route.params
  const {setImgUri} = state
  const [hasPermission, setHasPermission] = useState(null)
  // const [imgUri, setImgUri] = useState(null)
  const [preview, setPreview] = useState(false)

  let cam

  const BUTTON_MODES = {
    stop: 'square',
    record: 'video',
    delete: 'trash-2',
    restart: 'rotate-ccw',
    audio: 'mic',
    text: 'edit'
  }
  const newTimer = { min: 0, sec: 0 }

  // component state
  const [btn1Mode, setBtn1Mode] = useState('text')
  const [btn2Mode, setBtn2Mode] = useState('record')
  const [btn3Mode, setBtn3Mode] = useState('audio')

  // Recorder state
  const [time, setTime] = useState(newTimer)
  // const [duration, setDuration] = useState(newTimer)
  const [timerGo, setTimerGo] = useState(false)
  const [resetTimer, setResetTimer] = useState(false)

  const takePicture = async () => {
    if (!cam) {
      return
    }
    const options = {
      quality: 0.5,
      base64: true,
      exif: false,
      onPictureSaved: (p) => {
        setImgUri(p)
        setPreview(true)
      }
    }
    await cam.takePictureAsync(options)
  }

  // onPress handlers
  const handleRecord = () => {
    setBtn1Mode('delete')
    setBtn2Mode('stop')
    setTimerGo(true)
    setResetTimer(false)
  }

  const handleRestart = () => {
    setTime(newTimer)
    setTimerGo(false)
    setResetTimer(true)
  }

  const handleStop = async () => {
    setDuration({ ...time, sec: time.sec + 1 })
    handleRestart()
    setBtn3Mode('restart')
    takePicture()
  }

  const handleDelete = () => {
    handleRestart()
    setBtn1Mode('text')
    setBtn2Mode('record')
    setBtn3Mode('audio')
    setDuration(newTimer)
    setImgUri(null)
    setPreview(false)
  }

  const handleMode = {
    record: handleRecord,
    stop: handleStop,
    delete: handleDelete,
    restart: handleRestart,
    audio: handleAudio({ ...route.params }),
    text: handleText()({ ...route.params })
  }

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Camera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }
    getPermissions()
  }, [])

  if (hasPermission === null) {
    return <View />
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      {preview && imgUri ? (
        <View style={{ zIndex: 310 }}>
          <TouchableOpacity
            onPress={() => {
              setPreview(false)
              setImgUri(null)
            }}>
            <Image source={imgUri} style={styles.preview} />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View
            style={{
              position: 'absolute',
              top: 40,
              left: 40,
              opacity: 0.6,
              width: '80%',
              zIndex: 3,
              alignItems: 'flex-end',
              elevation: 300
            }}>
            <TouchableOpacity
              style={{
                padding: 6,
                borderRadius: 50,
                backgroundColor: '#16161A'
              }}
              onPress={() => navigation.navigate('SuccessfulHabits01')}>
              <FeatherIcons name="x" size={36} color={'white'} />
            </TouchableOpacity>
            <View
              style={{
                padding: 16,
                borderRadius: 12,
                backgroundColor: '#16161A',
                width: '100%'
              }}>
              <Text
                style={{
                  ...styles.text,
                  textAlign: 'center'
                }}>
                {prompt}
              </Text>
            </View>
          </View>
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.front}
            ref={(r) => {
              cam = r
            }}>
            {/* controls */}
            <View
              style={{
                ...styles.centered,
                height: '30%'
              }}>
              <Text style={{ ...styles.text, textAlign: 'center' }}>
                <Timer
                  time={time}
                  timerGo={timerGo}
                  setTime={setTime}
                  reset={resetTimer}
                />
              </Text>
              <View style={styles.buttonContainer}>
                {/* btn1 */}
                <TouchableOpacity onPress={handleMode[btn1Mode]}>
                  <FeatherIcons
                    name={BUTTON_MODES[btn1Mode]}
                    size={32}
                    color={'white'}
                  />
                </TouchableOpacity>
                {/* btn2 */}
                <TouchableOpacity
                  onPress={handleMode[btn2Mode]}
                  style={{
                    ...styles.centered,
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                    backgroundColor: 'red'
                  }}>
                  <FeatherIcons
                    name={BUTTON_MODES[btn2Mode]}
                    size={50}
                    color={'white'}
                    borderColor={'red'}
                  />
                </TouchableOpacity>
                {/* btn3 */}
                <TouchableOpacity onPress={handleMode[btn3Mode]}>
                  <FeatherIcons
                    name={BUTTON_MODES[btn3Mode]}
                    size={32}
                    color={'white'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Camera>
        </>
      )}
    </View>
  )
}

export default VideoRec
