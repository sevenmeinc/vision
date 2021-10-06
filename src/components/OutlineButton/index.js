import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Colors } from '../../constants/colors'

const OutlineButton = ({ title, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: color ? color : Colors.pianoBlack,
          borderRadius: 100,
          alignItems: 'center'
        }}>
        <Text
          style={{
            fontFamily: 'regular',
            fontSize: 17,
            color: color ? color : Colors.pianoBlack
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default OutlineButton
