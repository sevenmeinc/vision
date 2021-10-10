import React, { useState, useEffect } from 'react'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { TouchableOpacity, Text, View } from 'react-native'
import Space from '../Space'
import Timer from './Timer'

const newTimer = { min: 0, sec: 0 }

const AuxRecorderPlayer = ({ handleVideo, handleText }) => {
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

  // AudioRecorder state
  const [time, setTime] = useState(newTimer)
  const [duration, setDuration] = useState(newTimer)
  const [timerGo, setTimerGo] = useState(false)
  const [resetTimer, setResetTimer] = useState(false)

  // onPress handlers
  const handleRecord = () => {
    setIsRecording(true)
    setBtn1Mode('delete')
    setBtn2Mode('stop')
    setTimerGo(true)
    setResetTimer(false)
  }

  const handlePlay = async () => {
    setResetTimer(false)
    setBtn2Mode('pause')
    setTimerGo(true)
  }

  const handleRestart = () => {
    setTime(newTimer)
    setBtn2Mode('play')
    setTimerGo(false)
    setResetTimer(true)
  }

  const handleStop = () => {
    setDuration({ ...time, sec: time.sec + 1 })
    handleRestart()
    setIsRecording(false)
    setBtn3Mode('restart')
  }

  const handleDelete = () => {
    setTime(newTimer)
    setIsRecording(false)
    setBtn1Mode('text')
    setBtn2Mode('record')
    setBtn3Mode('video')
  }

  const handlePause = () => {
    setBtn2Mode('play')
    setTimerGo(false)
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

  useEffect(() => {
    if (btn2Mode === 'pause') {
      if (duration.min === time.min && duration.sec === time.sec) {
        handleRestart()
      }
    }
  }, [btn2Mode, time, duration])

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
      }}>
      {btn2Mode === 'record' ? (
        <Text
          style={{
            fontSize: 13,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 16,
            letterSpacing: 0,
            textAlign: 'left',
            color: '#737376'
          }}>
          Think out loud
        </Text>
      ) : (
        <Text
          style={{
            textAlign: 'center',
            width: '50%'
          }}>
          <Timer
            time={time}
            timerGo={timerGo}
            setTime={setTime}
            reset={resetTimer}
          />
          {isRecording
            ? null
            : ` / ${duration.min < 10 ? `0${duration.min}` : duration.min}:${
                duration.sec < 10 ? `0${duration.sec}` : duration.sec
              }`}
        </Text>
      )}
      <Space index={4} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '80%',
          justifyContent: 'space-evenly',
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
            color={'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AuxRecorderPlayer
