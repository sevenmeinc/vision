import React, { useState } from 'react'
import { View, Dimensions, TextInput, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import PromptContainer from '../../components/PromptContainer'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const PromptText = ({ route }) => {
  const navigation = useNavigation()
  const {
    prompts,
    state: { responses }
  } = route.params
  const prompt = prompts[responses]

  const [res, setRes] = useState('')

  const styles = StyleSheet.create({
    centered: { alignItems: 'center', justifyContent: 'center' }
  })

  const textInput = () => {
    return (
      <>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 20,
              letterSpacing: -0.01,
              textAlign: 'center'
            }}>
            {prompt.prompt}
          </Text>
          <TextInput
            onChangeText={(msg) => {
              setRes(msg)
            }}
            value={res}
            placeholder={'Start typing...'}
            style={{ height: 100, width: windowWidth * 0.9 }}
          />
        </View>
      </>
    )
  }

  return (
    <View
      style={{
        height: windowHeight,
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <PromptContainer
        prompt={prompt}
        input={textInput}
        handleNext={() => {
          navigation.navigate('Breathe', {
            ...route.params,
            state: { responses: responses + 1 }
          })
        }}
        handleBack={() =>
          navigation.navigate('PromptAudio', { ...route.params })
        }
      />
    </View>
  )
}

export default PromptText
