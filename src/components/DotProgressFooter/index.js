import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/colors'

const DotProgressFooter = ({
  current,
  total,
  darkMode,
  paddingBottom = 16
}) => {
  const renderProgress = () => {
    let stage = 0
    const progressArray = []
    while (stage++ < total) {
      progressArray.push(
        <Ionicons
          key={stage}
          name={'ellipse-sharp'}
          size={8}
          style={{ marginHorizontal: 6 }}
          color={
            stage === current
              ? darkMode
                ? 'white'
                : 'black'
              : darkMode
              ? Colors.ashToAsh
              : Colors.woodsmoke15
          }
        />
      )
    }
    return progressArray
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: paddingBottom,
        height: 24,
        paddingHorizontal: 16,
        alignItems: 'center'
      }}>
      <View
        style={{
          flexDirection: 'row'
        }}>
        {renderProgress()}
      </View>
    </View>
  )
}

export default DotProgressFooter
