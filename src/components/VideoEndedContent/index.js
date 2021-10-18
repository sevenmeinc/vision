import React from 'react'
import { View, Text } from 'react-native'

import Logo from '../Logo'
import OutlineButton from '../../components/OutlineButton'

const VideoEndedContent = ({ handleContinue, handleLater, handleReplay }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        justifyContent: 'space-between'
      }}>
      <View style={{ flex: 1, marginTop: 32 }}>
        <Logo fill="white" />
        <View style={{ backgroundColor: 'black' }}>
          <Text
            style={{
              color: '#fff',
              opacity: 1,
              marginTop: 32,
              fontFamily: 'medium',
              fontSize: 36
            }}>
            Ready to start?
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'flex-end'
        }}>
        <OutlineButton
          variant="light"
          title="Let's do it"
          onPress={handleContinue}
        />
        <View style={{ marginTop: 12 }} />
        <OutlineButton
          variant="light"
          title="Replay video"
          onPress={handleReplay}
        />
        <View style={{ marginTop: 12 }} />
        <OutlineButton
          variant="light"
          title="I'll come back later"
          onPress={handleLater}
        />
      </View>
    </View>
  )
}

export default VideoEndedContent
