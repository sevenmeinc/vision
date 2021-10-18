import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { Colors } from '../../constants/colors'

const ReflectionInput = ({ question, value, onChangeText, disabled }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 240,
        width: 320,
        borderRadius: 12,
        border: '1px solid #DADADA',
        boxShadow: '0px 12px 24px #000',
        marginBottom: 16
      }}>
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: Colors.grey,
          padding: 16
        }}>
        {question}
      </Text>
      <TextInput
        placeholder="I learned..."
        multiline={true}
        value={value}
        onChangeText={onChangeText}
        style={{ textAlignVertical: 'top', padding: 16, flex: 1 }}
      />
      <View>
        <TouchableOpacity
          style={{ marginBottom: 20, marginRight: 20, alignSelf: 'flex-end' }}
          disabled={disabled}>
          <Text style={{ color: disabled ? Colors.fountainCity : '#00968A' }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ReflectionInput
