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

const styles = StyleSheet.create({
  button: {
    marginRight: 4,
    borderRadius: 100,
    width: 168,
    height: 52,
    justifyContent: 'center'
  },
  text: { fontSize: 17, fontWeight: '500', textAlign: 'center' }
})

const ButtonBackNext = ({ handleNext }) => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
        paddingTop: 0
      }}>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{
          ...styles.button,
          backgroundColor: 'rgba(25, 51, 64, 0.08)'
        }}>
        <Text
          style={{
            ...styles.text
          }}>
          Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNext}
        style={{
          ...styles.button,
          backgroundColor: '#193340'
        }}>
        <Text
          style={{
            ...styles.text,
            color: '#fff'
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBackNext
