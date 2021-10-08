import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../constants/colors'
import AuxRecorderPlayer from '../AudioRecorderPlayer'

const InputAudioCard = ({ index, item }) => {
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
      <Text
        style={{
          fontStyle: 'italic',
          fontSize: 17,
          color: '#B2B2B2',
          marginHorizontal: 16,
          marginVertical: 12
        }}>
        Your response will appear here.
      </Text>
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 15 }}>
        <AuxRecorderPlayer />
      </View>
    </View>
  )
}

export default InputAudioCard