import React, { useState } from 'react'
import {
  View,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import PromptContainer from '../../components/PromptContainer'
import useKeyboard from '../../hooks/useKeyboard'

const { width } = Dimensions.get('window')

const PromptText = ({ route }) => {
  const { isKeyboardVisible, onFocus, onBlur } = useKeyboard()
  const {
    prompts,
    state: { responses }
  } = route.params
  const prompt = prompts[responses]

  const [res, setRes] = useState('')

  const textInput = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          margin: 16
        }}>
        <Text
          style={{
            fontSize: 17,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 20,
            letterSpacing: -0.01,
            textAlign: 'center'
          }}>
          {prompt.prompt}
        </Text>
        <View
          style={{
            width: '100%'
          }}>
          <TextInput
            onChangeText={(msg) => {
              setRes(msg)
            }}
            value={res}
            multiline={true}
            placeholder={'Start typing...'}
            onBlur={onBlur}
            onFocus={onFocus}
            style={{ width: width * 0.9, marginBottom: 48 }}
          />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          enabled={isKeyboardVisible}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 16
            }}>
            <PromptContainer prompt={prompt} input={textInput} route={route} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default PromptText
