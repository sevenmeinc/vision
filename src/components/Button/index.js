import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
  const { title, onPress, background, color } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: '100%',
          paddingVertical: 16,
          backgroundColor: background ? background : '#193340',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100
        }}>
        <Text
          style={{
            color: color ? color : 'white',
            fontFamily: 'regular',
            fontSize: 14
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button
