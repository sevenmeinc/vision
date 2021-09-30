import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
  const { title, onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          paddingVertical: 16,
          backgroundColor: '#193340',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100
        }}>
        <Text style={{ color: 'white', fontFamily: 'regular', fontSize: 14 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
