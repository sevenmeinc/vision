import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../constants/colors'
import AuxRecorderPlayer from '../AudioRecorderPlayer'

// TODO: refactor such that the TextInput from InputCard appears here disabled until setTextInput is true
const InputAudioCard = ({ index, item, videoScreen }) => {
  const navigation = useNavigation()

  const [savedRecording, setSavedRecording] = useState(false)
  const [textDisabled, setTextDisabled] = useState(true)
  const [textValue, setTextValue] = useState('')

  const handleChange = (text) => {
    setTextValue(text)
  }
  // if (index === 0) {
  //   console.log('\nReframe videoScreen\n', videoScreen)
  // }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: 360,
        width: 280,
        borderRadius: 12,
        border: '1px solid #DADADA',
        boxShadow: '0px 12px 24px #000'
      }}>
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: Colors.grey,
          marginHorizontal: 16,
          marginVertical: 12
        }}>
        Example {index + 1}
      </Text>
      <Text
        style={{
          textAlignVertical: 'top',
          color: Colors.pianoBlack,
          fontSize: 17,
          marginHorizontal: 16,
          marginVertical: 12
        }}>
        {item}
      </Text>

      <TextInput
        editable={!textDisabled}
        placeholder={'Your response will appear here.'}
        onChangeText={handleChange}
        multiline={true}
        value={textValue}
        style={{ textAlignVertical: 'top', padding: 16 }}
      />

      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 15 }}>
        <AuxRecorderPlayer
          handleText={() => {
            setTextDisabled(false)
          }}
          handleVideo={() => {
            setTextDisabled(true)
            navigation.navigate(...videoScreen)
          }}
          btn1Initial={{ text: 'edit' }}
          btn3Initial={{ video: 'video' }}
          setSavedRecording={setSavedRecording}
        />
      </View>
    </View>
  )
}

export default InputAudioCard
