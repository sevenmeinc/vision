import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../constants/colors'

import Logo from '../Logo'

const BotMessage = (props) => {
  const { messages } = props

  return (
    <View style={{ width: '90%', marginVertical: 24 }}>
      <Logo />

      {messages.map((msg, index) => {
        return (
          <View style={{ marginTop: 12 }} key={index}>
            <Text
              style={{
                fontFamily: 'medium',
                fontSize: 17,
                color: Colors.pianoBlack
              }}>
              {msg.message}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

export default BotMessage
