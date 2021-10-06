import { useEffect, useState } from 'react'
import { Keyboard, Platform } from 'react-native'

const useKeyboard = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const [keyboardHeight, setKeyboardHeight] = useState(0)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      () => {
        setKeyboardVisible(true)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      () => {
        setKeyboardVisible(false)
        setKeyboardHeight(0)
      }
    )
    const getKeyboardHeight = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height)
    })

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
      getKeyboardHeight.remove()
    }
  }, [])

  const onFocus = () => {
    if (Platform.OS === 'android') {
      setKeyboardVisible(true)
    }
  }

  const onBlur = () => {
    if (Platform.OS === 'android') {
      setKeyboardVisible(false)
    }
  }
  return { onFocus, onBlur, isKeyboardVisible, keyboardHeight }
}

export default useKeyboard
