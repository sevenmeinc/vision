import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Colors } from '../../constants/colors'

const styles = {
  light: {
    container: { borderColor: 'white' },
    text: { color: 'white' }
  }
}
const OutlineButton = ({ title, onPress, variant }) => {
  const lightContainer = variant === 'light' ? styles.light.container : {}
  const lightColor = variant === 'light' ? styles.light.text : {}
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: Colors.pianoBlack,
          borderRadius: 100,
          alignItems: 'center',
          ...lightContainer
        }}>
        <Text
          style={{
            fontFamily: 'regular',
            fontSize: 17,
            color: Colors.pianoBlack,
            ...lightColor
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default OutlineButton
