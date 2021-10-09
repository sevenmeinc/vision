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
import useKeyboard from '../../hooks/useKeyboard'
import ButtonBackNext from '../../components/ButtonBackNext'

const { width } = Dimensions.get('window')

const PromptText = ({ prompt, handleNext, audioScreen, videoScreen }) => {
  const navigation = useNavigation()

  const { isKeyboardVisible, onFocus, onBlur } = useKeyboard()
  const [dismissPadding, setDismissPadding] = useState(30)

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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss()
            setDismissPadding(140)
          }}>
          <View style={{ flex: 1, paddingHorizontal: 8 }}>
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
                opacity: isKeyboardVisible ? 1 : 0,
                paddingBottom: dismissPadding,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={styles.navButton}
                  onPress={() => {
                    navigation.navigate(audioScreen)
                  }}>
                  <FeatherIcons name={'mic'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.navButton}
                  onPress={() => {
                    navigation.navigate(videoScreen)
                  }}>
                  <FeatherIcons name={'video'} size={20} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                  Keyboard.dismiss()
                  setDismissPadding(140)
                }}>
                <FeatherIcons name={'chevron-down'} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <ButtonBackNext handleNext={handleNext} />
    </SafeAreaView>
  )
}

export default PromptText
