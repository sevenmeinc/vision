import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../constants/colors'

const Card = ({ item, index }) => {
  return (
    <View
      style={{
        height: 158,
        width: 212,
        backgroundColor: 'white',
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 12
      }}>
      <Text
        style={{
          color: Colors.shadyCharacter,
          fontFamily: 'medium',
          fontSize: 11
        }}>{`BENEFIT 0${index + 1}`}</Text>
      <Text
        numberOfLines={7}
        ellipsizeMode="tail"
        style={{
          marginTop: 8,
          fontFamily: 'regular',
          color: Colors.pianoBlack,
          fontSize: 13
        }}>
        {item}
      </Text>
    </View>
  )
}

export default Card
