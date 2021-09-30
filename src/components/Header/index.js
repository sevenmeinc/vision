import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({ navigation, title }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#fff'
      }}>
      <Text
        style={{
          fontSize: 14,
          color: '#666666',
          fontWeight: '600',
          textAlign: 'center',
          letterSpacing: '-.01'
        }}>
        {title}
      </Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={{
            fontSize: 14,
            color: '#00968A',
            fontWeight: '500',
            textAlign: 'center',
            letterSpacing: '-.01'
          }}>
          Close
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header
