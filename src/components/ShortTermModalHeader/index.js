import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ShortTermModalHeader = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#fff'
      }}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text
          style={{
            fontSize: 14,
            color: '#32A6A6',
            fontWeight: '600',
            textAlign: 'center',
            letterSpacing: -0.01
          }}>
          Cancel
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 14,
          color: '#16161A',
          fontWeight: '500',
          textAlign: 'center',
          letterSpacing: -0.01
        }}>
        Short-term benefits
      </Text>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text
          style={{
            fontSize: 14,
            color: '#32A6A6',
            fontWeight: '500',
            textAlign: 'center',
            letterSpacing: -0.01
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ShortTermModalHeader
