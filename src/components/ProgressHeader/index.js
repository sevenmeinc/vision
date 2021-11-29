import React from 'react'
import { SafeAreaView, View, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const ProgressHeader = ({ navigation, route, backgroundColor, fillColor }) => {
  const ScreenWidth = Dimensions.get('window').width
  return (
    <SafeAreaView
      style={{
        width: ScreenWidth - 30,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: backgroundColor ? backgroundColor : 'white'
      }}>
      {
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 45,
              height: 2,
              backgroundColor: fillColor ? fillColor : 'white',
              marginRight: 8,
              opacity: route.name === 'video' ? 1 : 0.15
            }}
          />
          <View
            style={{
              width: 45,
              height: 2,
              backgroundColor: fillColor ? fillColor : 'white',
              marginRight: 8,
              opacity: route.name === 'postVideo1' ? 1 : 0.15
            }}
          />
          <View
            style={{
              width: 45,
              height: 2,
              backgroundColor: fillColor ? fillColor : 'white',
              marginRight: 8,
              opacity: route.name === 'postVideo2' ? 1 : 0.15
            }}
          />
          <View
            style={{
              width: 45,
              height: 2,
              backgroundColor: fillColor ? fillColor : 'white',
              marginRight: 8,
              opacity: route.name === 'postVideo3' ? 1 : 0.15
            }}
          />
          <View
            style={{
              width: 45,
              height: 2,
              backgroundColor: fillColor ? fillColor : 'white',
              marginRight: 8,
              opacity: route.name === 'postVideo4' ? 1 : 0.15
            }}
          />
        </View>
      }

      <View>
        <Ionicons
          name="md-close-sharp"
          size={24}
          color={fillColor ? fillColor : 'white'}
          onPress={() => navigation.navigate('Flows')}
        />
      </View>
    </SafeAreaView>
  )
}

export default ProgressHeader
