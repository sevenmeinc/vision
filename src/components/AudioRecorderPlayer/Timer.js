// from https://www.codegrepper.com/code-examples/javascript/react+timer+count+up
import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'

const Timer = ({ time, setTime, timerGo, reset }) => {
  const [min, setMinutes] = useState(time.min)
  const [sec, setSeconds] = useState(time.sec)
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (reset) {
        setMinutes(0)
        setSeconds(0)
        return
      }
      if (timerGo) {
        if (sec < 59) {
          setSeconds(sec + 1)
          setTime({ min, sec })
        } else {
          setSeconds(0)
          setMinutes(min + 1)
          setTime({ sec, min })
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <>
      <Text>
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </Text>
    </>
  )
}

export default Timer
