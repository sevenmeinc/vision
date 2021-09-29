import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import { Button } from 'react-native-paper'
import Space from '../Space'
import Breathe from '../Breathe'
// import Breather1 from '../Breathe/Breather1'
import Breather2 from '../Breathe/Breather2'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({})

const PromptContainer = ({ prompt }) => {
  const [didBreathe, setDidBreathe] = useState(false)
  const [inputType, setInputType] = useState('audio')

  const breathed = () => {
    if (!didBreathe) {
      return (
        <Breathe
          breather={Breather2}
          contemplationPrompt={prompt.contemplation}
        />
      )
    }
  }

  return (
    <View
      style={{
        borderWidth: 1,
        height: windowHeight,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <Text>PromptContainerStartsHere</Text>
      {/* <Text> Contemplation: {prompt.contemplation}</Text>
      <Text> Prompt: {prompt.prompt}</Text>
      <Space index={4} /> */}
      {breathed()}
      <View
        style={{
          flexDirection: 'row',
          width: windowWidth,
          justifyContent: 'space-evenly'
        }}>
        <Button
          mode={'contained'}
          onPress={() => {
            console.log('pressed 1!')
          }}>
          back
        </Button>
        <Button
          mode={'contained'}
          onPress={() => {
            !didBreathe && setDidBreathe(true)
            console.log('pressed 2!')
          }}>
          next
        </Button>
      </View>
    </View>
  )
}

export default PromptContainer
