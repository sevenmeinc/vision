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

const { width } = Dimensions.get('window')

const PromptText = ({ route }) => {
  const navigation = useNavigation()

  const { isKeyboardVisible, onFocus, onBlur } = useKeyboard()
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
      paddingHorizontal: 8,
      paddingVertical: 8,
      borderWidth: 1,
      marginHorizontal: 8,
      marginBottom: 8
    }
  })

  const textInput = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
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
            paddingBottom: 40
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
              width: width * 0.9,
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
          <View
            style={{
              width: width,
              marginBottom: 8,
              flexDirection: 'row'
            }}>
            <TouchableOpacity style={styles.navButton} onPress={handleAudio}>
              <FeatherIcons name={'mic'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={handleVideo}>
              <FeatherIcons name={'video'} size={20} />
            </TouchableOpacity>
          </View>
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
              justifyContent: 'center'
            }}>
            <PromptContainer prompt={prompt} input={textInput} route={route} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default PromptText
