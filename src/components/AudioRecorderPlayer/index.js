import React, { useState } from 'react'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { TouchableOpacity, Text, View } from 'react-native'
import Space from '../Space'
import colors from '../../assets/colors'
import Timer from './Timer'

const AuxRecorderPlayer = ({ handleVideo, handleText, refId, promptNum }) => {
  const newTimer = '00:00:00'

  const BUTTON_MODES = {
    play: 'play',
    stop: 'square',
    record: 'mic',
    pause: 'pause',
    delete: 'trash-2',
    restart: 'rotate-ccw',
    video: 'video',
    text: 'edit'
  }

  // component state
  const [btn1Mode, setBtn1Mode] = useState('text')
  const [btn2Mode, setBtn2Mode] = useState('record')
  const [btn3Mode, setBtn3Mode] = useState('video')
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // AudioRecorder state
  const [recordTime, setRecordTime] = useState(newTimer)
  const [playTime, setPlayTime] = useState(newTimer)
  const [duration, setDuration] = useState(newTimer)

  // let time = setInterval(countTimer, 10000)
  // let totalSeconds = 0
  // const countTimer = () => {
  //   ++totalSeconds
  //   let hour = ~~(totalSeconds / 3600)
  //   let minute = ~~((totalSeconds - hour * 3600) / 60)
  //   let seconds = totalSeconds - (hour * 3600 + minute * 60)
  //   if (hour < 10) {
  //     hour = '0' + hour
  //   }
  //   if (minute < 10) {
  //     minute = '0' + minute
  //   }
  //   if (seconds < 10) {
  //     seconds = '0' + seconds
  //   }
  //   return `${hour}:${minute}:${seconds}`
  // }

  // onPress handlers
  const handleRecord = () => {
    if (isRecording) {
      return
    }
    setIsRecording(true)
    setBtn1Mode('delete')
    setBtn2Mode('stop')
    // TODO: start recording timer
    // const audioSet = {
    //   AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    //   AudioSourceAndroid: AudioSourceAndroidType.MIC,
    //   AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    //   AVNumberOfChannelsKeyIOS: 2,
    //   AVFormatIDKeyIOS: AVEncodingOption.aac
    // }
    // const result = audRecPlay.startRecorder(path, audioSet)
    // audRecPlay.addRecordBackListener((e) => {
    //   setRecordTime(audRecPlay.mmssss(Math.floor(e.currentPosition)))
    //   return
    // })
    // return result
  }

  const handlePlay = async () => {
    setBtn2Mode('pause')
    if (isPaused) {
      setIsPaused(false)
      return
    }
    // TODO start playTimer
    // const msg = await audRecPlay.startPlayer(path)
    // audRecPlay.addPlayBackListener((e) => {
    //   setPlayTime(audRecPlay.mmssss(Math.floor(e.currentPosition)))
    //   setDuration(audRecPlay.mmssss(Math.floor(e.duration)))
    //   if (e.currentPosition === e.duration) {
    //     setBtn2Mode('play')
    //     setPlayTime(newTimer)
    //   }
    //   return
    // })
    // return msg
  }

  const handleStop = () => {
    // const result = audRecPlay.stopRecorder()
    // audRecPlay.removeRecordBackListener()
    setIsRecording(false)
    setDuration(recordTime)
    setBtn2Mode('play')
    setBtn3Mode('restart')
    // return result
  }

  const handleDelete = () => {
    setIsPaused(false)
    setBtn1Mode('text')
    setBtn2Mode('record')
    setBtn3Mode('video')
  }

  const handlePause = async () => {
    setBtn2Mode('play')
    setIsPaused(true)
    // await audRecPlay.pausePlayer()
  }

  const handleRestart = async () => {
    // await audRecPlay.stopPlayer()
    // audRecPlay.removePlayBackListener()
    setPlayTime(newTimer)
    setIsPaused(false)
    setBtn2Mode('play')
  }

  const handleMode = {
    record: handleRecord,
    stop: handleStop,
    play: handlePlay,
    pause: handlePause,
    delete: handleDelete,
    restart: handleRestart,
    video: handleVideo,
    text: handleText
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: 20
      }}>
      {btn2Mode === 'record' ? (
        <Text>Think out loud</Text>
      ) : (
        <Text
          style={{
            textAlign: isRecording ? 'center' : 'right',
            width: '40%'
          }}>
          {/* {isRecording ? recordTime : `${playTime} / ${duration}`} */}
          {isRecording ? <Timer /> : `${playTime} / ${duration}`}
        </Text>
      )}
      <Space index={4} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '80%',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
        {/* btn1: pause/resume */}
        <TouchableOpacity onPress={handleMode[btn1Mode]}>
          <FeatherIcons
            name={BUTTON_MODES[btn1Mode]}
            size={32}
            color={'black'}
          />
        </TouchableOpacity>

        {/* btn2: record/stop/play/pause */}
        <TouchableOpacity
          onPress={handleMode[btn2Mode]}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: 50,
            backgroundColor: ['play', 'pause'].includes(btn2Mode)
              ? 'transparent'
              : 'red'
          }}>
          <FeatherIcons
            name={BUTTON_MODES[btn2Mode]}
            size={50}
            color={['play', 'pause'].includes(btn2Mode) ? 'black' : 'white'}
            borderColor={'red'}
          />
        </TouchableOpacity>

        {/* btn3 camera/restart */}
        <TouchableOpacity
          onPress={handleMode[btn3Mode]}
          style={{
            height: isRecording ? 0 : null
          }}>
          <FeatherIcons
            name={BUTTON_MODES[btn3Mode]}
            size={32}
            color={colors.text}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AuxRecorderPlayer
