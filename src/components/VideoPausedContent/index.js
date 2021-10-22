import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons'
import TapMoreWithBottomSheet from '../TapMoreWithBottomSheet'

const VideoPausedContent = ({
  title,
  subTitle,
  time,
  onPressPlay,
  onOpen,
  onClose,
  hideTapMore
}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            color: 'white',
            marginTop: 32,
            marginBottom: 24,
            fontFamily: 'bold',
            textTransform: 'uppercase',
            fontSize: 17
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'medium',
            fontSize: 36,
            textAlign: 'center',
            marginBottom: 24
          }}>
          {subTitle}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '25%'
          }}>
          <Feather name="clock" size={15} color="white" />
          <Text style={{ color: 'white', marginLeft: 4 }}>{time}</Text>
        </View>
        <TouchableOpacity onPress={onPressPlay}>
          <Ionicons name="play-circle-outline" size={120} color="white" />
        </TouchableOpacity>
      </View>
      {!hideTapMore && (
        <TapMoreWithBottomSheet
          variant="light"
          onOpen={onOpen}
          onClose={onClose}
        />
      )}
    </View>
  )
}
VideoPausedContent.defaultProps = {
  hideTapMore: true
}

export default VideoPausedContent
