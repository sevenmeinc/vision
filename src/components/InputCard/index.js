import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Colors } from '../../constants/colors'

const InputCard = ({
  index,
  setPositiveThinking1,
  setPositiveThinking2,
  setPositiveThinking3
}) => {
  const handleChange = (index, text) => {
    if (index === 0) {
      setPositiveThinking1(text)
    } else if (index === 1) {
      setPositiveThinking2(text)
    } else {
      setPositiveThinking3(text)
    }
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 300,
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
          padding: 16
        }}>
        Example {index + 1}
      </Text>
      <TextInput
        placeholder="I have failed at every diet I have ever tried."
        onChangeText={(text) => handleChange(index, text)}
        multiline={true}
        style={{ textAlignVertical: 'top', padding: 16 }}
      />
    </View>
  )
}

export default InputCard
