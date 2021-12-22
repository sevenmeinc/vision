import React, { useState } from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../constants/colors'
import AuxRecorderPlayer from '../AudioRecorderPlayer'

const InputAudioCard = ({
  index,
  item,
  videoScreen,
  imageUri,
  textValue,
  setTextValue,
  savedRecording,
  setSavedRecording
}) => {
  const navigation = useNavigation()

  const [textDisabled, setTextDisabled] = useState(true)

  const handleChange = (text) => {
    setTextValue(text)
  }

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
      {imageUri ? (
        <Image
          source={imageUri}
          style={{
            width: '100%',
            flex: 1,
            resizeMode: 'contain'
          }}
        />
      ) : (
        <TextInput
          editable={!textDisabled}
          placeholder={'Your response will appear here.'}
          onChangeText={handleChange}
          multiline={true}
          value={
            savedRecording ? 'Transcript not available in prototype' : textValue
          }
          style={{ textAlignVertical: 'top', padding: 16 }}
        />
      )}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 15
        }}>
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
          setIsPreview={setSavedRecording}
        />
      </View>
    </View>
  )
}

export default InputAudioCard
