import React, { useState } from 'react'
import {
  View,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'
import FeatherIcons from 'react-native-vector-icons/Feather'
import PromptContainer from '../../components/PromptContainer'
import useKeyboard from '../../hooks/useKeyboard'

const { width, height } = Dimensions.get('window')

const PromptText = ({ route }) => {
  const navigation = useNavigation()

  const { isKeyboardVisible, onFocus, onBlur, keyboardHeight } = useKeyboard()
  const {
    prompts,
    state: { responses }
  } = route.params
  const prompt = prompts[responses]

  const [res, setRes] = useState('')

  const handleAudio = () => {
    navigation.navigate('PromptAudio', { ...route.params })
  }
  const handleVideo = () => {
    navigation.navigate('PromptVideo', {
      ...route.params
    })
  }

  const styles = StyleSheet.create({
    navButton: {
      height: 40,
      width: 40,
      borderRadius: 8,
      padding: 8,
      borderWidth: 1,
      marginHorizontal: 8
    }
  })

  const textInput = () => {
    return (
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            enabled={isKeyboardVisible}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View>
              <Text
                style={{
                  fontSize: 17,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 20,
                  letterSpacing: -0.01,
                  textAlign: 'center',
                  padding: 16
                }}>
                {prompt.prompt}
              </Text>
              <View
                style={{
                  width: width,
                  alignItems: 'center',
                  height: height - 64
                }}>
                <TextInput
                  onChangeText={(msg) => {
                    setRes(msg)
                  }}
                  value={res}
                  multiline
                  numberOfLines={8}
                  textAlignVertical="top"
                  placeholder={'Start typing...'}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  style={{
                    width: width,
                    flex: 1,
                    padding: 16,
                    fontSize: 17,
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: 22,
                    letterSpacing: 0,
                    textAlign: 'left'
                  }}
                />
                {isKeyboardVisible && (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: width,
                      paddingBottom: keyboardHeight + 80
                    }}>
                    <TouchableOpacity
                      style={styles.navButton}
                      onPress={handleAudio}>
                      <FeatherIcons name={'mic'} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.navButton}
                      onPress={handleVideo}>
                      <FeatherIcons name={'video'} size={20} />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    )
  }

  return (
    <View
      style={{
        alignItems: 'flext-start',
        justifyContent: 'center'
      }}>
      <PromptContainer input={textInput} route={route} />
    </View>
  )
}

export default PromptText
