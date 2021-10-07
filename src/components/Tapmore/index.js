import React from 'react'
import { Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

const Tapmore = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'center',
        width: width
      }}>
      <Feather name="chevron-up" size={16} color="#666666" />
      <Text
        sx={{
          alignSelf: 'center',
          fontFamily: 'medium',
          fontSize: 11,
          color: '#666666'
        }}>
        Tap more
      </Text>
    </TouchableOpacity>
  )
}

Tapmore.defaultProps = {
  onPress: () => {}
}

export default Tapmore
