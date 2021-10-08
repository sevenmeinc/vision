import React from 'react'
import { View } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Colors } from '../../constants/colors'

const Progress = ({ stage = 0 }) => {
  return (
    <View
      style={{
        flexDirection: 'row'
      }}>
      <FeatherIcons
        name={'minus'}
        size={36}
        color={stage === 0 ? 'black' : Colors.woodsmoke15}
      />
      <FeatherIcons
        name={'minus'}
        size={36}
        color={stage === 1 ? 'black' : Colors.woodsmoke15}
      />
      <FeatherIcons
        name={'minus'}
        size={36}
        color={stage === 2 ? 'black' : Colors.woodsmoke15}
      />
    </View>
  )
}

export default Progress
