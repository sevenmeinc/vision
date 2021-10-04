import { useEffect, useState } from 'react'
import { Keyboard, Platform } from 'react-native'

const useKeyboard = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

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
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
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
  return { onFocus, onBlur, isKeyboardVisible }
}

export default useKeyboard
