import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Svg, { Rect, Path } from 'react-native-svg'
import EmojiButton from '../EmojiButton'
import Button from '../Button'
import { Colors } from '../../constants/colors'

const Feedback = ({ onPress }) => {
  const [feedback, setFeedback] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View style={{ alignItems: 'center' }}>
            <Svg
              width={48}
              height={48}
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Rect width={48} height={48} rx={24} fill="#193340" />
              <Path
                d="M32 18L21 29l-5-5"
                stroke="#fff"
                strokeWidth={2.667}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
            <Text
              style={{
                color: Colors.pianoBlack,
                fontFamily: 'bold',
                fontSize: 32,
                marginTop: 12,
                marginBottom: 32
              }}>
              Hooray!
            </Text>
            <Text
              style={{
                color: Colors.ashToAsh,
                fontStyle: 'italic',
                fontSize: 17
              }}>
              Did you find this useful?
            </Text>
            {!feedback ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: 225,
                  marginTop: 16,
                  justifyContent: 'space-around'
                }}>
                <EmojiButton emoji="🙁" onPress={() => setFeedback(true)} />
                <EmojiButton emoji="😐" onPress={() => setFeedback(true)} />
                <EmojiButton emoji="😊" onPress={() => setFeedback(true)} />
              </View>
            ) : (
              <View style={{ marginTop: 32 }}>
                <Text
                  style={{
                    fontStyle: 'italic',
                    fontSize: 17,
                    color: Colors.ashToAsh
                  }}>
                  Thanks for your feedback!
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <Button title="Return to my feed" onPress={onPress} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Feedback
