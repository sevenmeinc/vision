import React, { useState } from 'react'
import {
  View,
  Dimensions,
  TextInput,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PromptContainer from '../../components/PromptContainer'
import useKeyboard from '../../hooks/useKeyboard'

const { width, height } = Dimensions.get('window')

const PromptText = ({ route }) => {
  const { isKeyboardVisible, onFocus, onBlur } = useKeyboard()
  const navigation = useNavigation()
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
            style={{ height: '100%', width: width * 0.9 }}
          />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        enabled={isKeyboardVisible}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <View
          style={{
            height: height,
            padding: 16,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <PromptContainer
            prompt={prompt}
            input={textInput}
            handleNext={() => {
              navigation.navigate('Breathe', {
                ...route.params,
                state: { responses: responses + 1 }
              })
            }}
            handleBack={() =>
              navigation.navigate('PromptAudio', { ...route.params })
            }
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default PromptText
