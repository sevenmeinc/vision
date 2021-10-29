import React, { useState, useEffect } from 'react'
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
import { Feather } from '@expo/vector-icons'
import useKeyboard from '../../hooks/useKeyboard'
import ButtonBackNext from '../../components/ButtonBackNext'

const { width } = Dimensions.get('window')

const PromptText = ({
  setResponse,
  prompt,
  nextScreen,
  audioScreen,
  videoScreen
}) => {
  const navigation = useNavigation()

  const { isKeyboardVisible, onFocus, onBlur } = useKeyboard()
  const [dismissPadding, setDismissPadding] = useState(65)

  const [res, setRes] = useState('')
  const styles = StyleSheet.create({
    navButton: {
      height: 40,
      width: 40,
      borderWidth: 1,
      borderColor: '#E5E5E5',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      margin: 8
    }
  })

  const dismissKeyboardPadding = () => {
    setDismissPadding(180)
  }

  useEffect(() => {
    if (setResponse && res) {
      return () => setResponse(res)
    }
  }, [setResponse, res])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled={isKeyboardVisible}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss()
            dismissKeyboardPadding()
          }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 8,
              marginTop: 24,
              alignItems: 'center'
            }}>
            <Text
              style={{
                fontSize: 17,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 20,
                letterSpacing: -0.01,
                textAlign: 'center',
                marginHorizontal: 15
              }}>
              {prompt}
            </Text>
            <TextInput
              onChangeText={(msg) => {
                setRes(msg)
                dismissKeyboardPadding()
              }}
              value={res}
              multiline
              numberOfLines={8}
              textAlignVertical="top"
              placeholder={'Start typing...'}
              onBlur={onBlur}
              onFocus={onFocus}
              autoFocus={true}
              style={{
                width: width,
                flex: 1,
                marginTop: 24,
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
                opacity: isKeyboardVisible ? 1 : 0,
                paddingBottom: dismissPadding,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between'
              }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  disabled={!isKeyboardVisible}
                  style={styles.navButton}
                  onPress={() => {
                    navigation.navigate(audioScreen)
                  }}>
                  <Feather name={'mic'} size={20} color={'#717173'} />
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!isKeyboardVisible}
                  style={styles.navButton}
                  onPress={() => {
                    navigation.navigate(videoScreen)
                  }}>
                  <Feather name={'video'} size={20} color={'#717173'} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                disabled={!isKeyboardVisible}
                style={styles.navButton}
                onPress={() => {
                  Keyboard.dismiss()
                  dismissKeyboardPadding()
                }}>
                <Feather name={'chevron-down'} size={30} color={'#717173'} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <ButtonBackNext nextScreen={nextScreen} disableButton={!res.length} />
    </SafeAreaView>
  )
}

export default PromptText
