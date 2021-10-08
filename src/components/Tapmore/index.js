import React from 'react'
import { Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

const Tapmore = ({ onPress, variant }) => {
  const color = variant === 'light' ? 'white' : '#666666'
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        width
      }}>
      <Feather name="chevron-up" size={16} color={color} />
      <Text
        style={{
          alignSelf: 'center',
          fontFamily: 'medium',
          fontSize: 11,
          color
        }}>
        Tap more
      </Text>
    </TouchableOpacity>
  )
}

Tapmore.defaultProps = {
  onPress: () => {},
  variant: ''
}

export default Tapmore
