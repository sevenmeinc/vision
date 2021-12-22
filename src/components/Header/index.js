import React from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Header = ({ navigation, title }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff'
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 32,
          marginVertical: 8,
          marginHorizontal: 16,
          backgroundColor: '#fff'
        }}>
        <Text
          style={{
            fontSize: 14,
            color: '#666666',
            fontWeight: '600',
            textAlign: 'center',
            letterSpacing: -0.01
          }}>
          {title}
        </Text>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text
            style={{
              fontSize: 14,
              color: '#00968A',
              fontWeight: '500',
              textAlign: 'center',
              letterSpacing: -0.01
            }}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Header
