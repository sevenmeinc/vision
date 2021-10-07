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

const { width } = Dimensions.get('window')

const PromptText = () => {
  const navigation = useNavigation()

  const { isKeyboardVisible, onFocus, onBlur } = useKeyboard()

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, paddingHorizontal: 8 }}>
            <Text
              style={{
                fontSize: 17,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 20,
                letterSpacing: -0.01,
                textAlign: 'center',
                marginHorizontal: 15,
                marginVertical: 30
              }}>
              What is one healthy habit you sustained long-term?
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
                display: isKeyboardVisible ? 'flex' : 'none',
                marginBottom: isKeyboardVisible ? 90 : 30,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.navButton}>
                  <FeatherIcons name={'mic'} size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                  <FeatherIcons name={'video'} size={20} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.navButton}
                onPress={Keyboard.dismiss}>
                <FeatherIcons name={'chevron-down'} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default PromptText
