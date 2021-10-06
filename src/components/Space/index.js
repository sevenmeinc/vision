import React from 'react'
import { View, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const spaces = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64]

const Space = ({ index }) => {
  const style = {
    width,
    height: spaces[index] ?? 0,
    margin: 0,
    padding: 0
  }

  return <View style={style} />
}

Space.defaultProps = {
  index: 0
}

export default Space
