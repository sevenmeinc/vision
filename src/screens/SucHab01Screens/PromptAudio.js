import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AuxRecorderPlayer from '../../components/AudioRecorderPlayer'
import ButtonBackNext from '../../components/ButtonBackNext'

const PromptAudio = ({
  description,
  prompt,
  textScreen,
  videoScreen,
  nextScreen
}) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 16,
        paddingTop: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <View>
        <Text
          style={{
            padding: 16,
            paddingTop: 0,
            fontSize: 17,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 20,
            letterSpacing: -0.01,
            textAlign: 'center'
          }}>
          {prompt}
        </Text>
        <Text
          style={{
            paddingHorizontal: 16,
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 20,
            letterSpacing: -0.01,
            textAlign: 'center',
            color: '#4D4D4D'
          }}>
          {description}
        </Text>
      </View>

      <AuxRecorderPlayer
        handleText={() => {
          navigation.navigate(textScreen)
        }}
        handleVideo={() => {
          navigation.navigate(videoScreen)
        }}
      />
      <ButtonBackNext nextScreen={nextScreen} />
    </SafeAreaView>
  )
}

export default PromptAudio
