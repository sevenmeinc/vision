import React from 'react'
import { Button } from 'react-native-paper'
import { View } from 'react-native'

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        mode="outlined"
        onPress={() => props.navigation.navigate('flow1')}>
        Flow 1
      </Button>
    </View>
  )
}

export default HomeScreen
