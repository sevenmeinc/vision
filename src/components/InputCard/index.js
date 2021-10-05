import React from 'react'
import { View, Text } from 'react-native'
import { Colors } from '../../constants/colors'

const InputCard = (props) => {
  return (
    <View
      style={{
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
          padding: 16
        }}>
        Example {props.index + 1}
      </Text>
      <Text style={{ padding: 16 }}>
        I will get to spend more time with my family.
      </Text>
    </View>
  )
}

export default InputCard
