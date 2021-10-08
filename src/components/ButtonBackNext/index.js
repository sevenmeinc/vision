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
  }
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
          // marginRight: 4,
          // borderRadius: 100,
          // width: 168,
          // height: 52,
          // justifyContent: 'center',
          ...styles.button,
          backgroundColor: 'rgba(25, 51, 64, 0.08)'
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            textAlign: 'center'
          }}>
          Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleNext}
        style={{
          // marginLeft: 4,
          // borderRadius: 100,
          // width: 168,
          // height: 52,
          // justifyContent: 'center',
          ...styles.button,
          backgroundColor: '#193340'
        }}>
        <Text
          style={{
            fontSize: 17,
            color: '#fff',
            fontWeight: '500',
            textAlign: 'center'
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBackNext
