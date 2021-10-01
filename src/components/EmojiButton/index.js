import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const EmojiButton = (props) => {
  const { emoji, onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 64,
          width: 64,
          borderRadius: 32,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 5
        }}>
        <Text style={{ color: 'white', fontSize: 36 }}>{emoji}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default EmojiButton
