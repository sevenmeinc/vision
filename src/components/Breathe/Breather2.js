/**
 * Code templated from:
 * https://github.com/WJimmyCook/react-native-animated-examples/blob/master/App.js
 * */

import React, { useRef } from 'react'
import { StyleSheet, View, Dimensions, Animated } from 'react-native'

const { width, height } = Dimensions.get('window')
const circleWidth = width / 4
export default function Breathe2() {
  const move = useRef(new Animated.Value(0)).current
  const textOpacity = useRef(new Animated.Value(1)).current
  Animated.loop(
    Animated.sequence([
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.timing(move, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true
        })
      ]),
      Animated.parallel([
        Animated.timing(textOpacity, {
          delay: 100,
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.timing(move, {
          delay: 1000,
          toValue: 0,
          duration: 4000,
          useNativeDriver: true
        })
      ])
    ])
  ).start()
  const translate = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circleWidth / 6]
  })

  return (
    <View style={styles.container}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
        const rotation = move.interpolate({
          inputRange: [0, 1],
          outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`]
        })
        return (
          <Animated.View
            key={item}
            style={{
              opacity: 0.1,
              backgroundColor: 'purple',
              width: circleWidth,
              height: circleWidth,
              borderRadius: circleWidth / 2,
              ...StyleSheet.absoluteFill,
              transform: [
                {
                  rotateZ: rotation
                },
                { translateX: translate },
                { translateY: translate }
              ]
            }}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: '35%',
    top: height / 6
  }
})
