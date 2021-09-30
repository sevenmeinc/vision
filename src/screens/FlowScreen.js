import React from 'react'
import { Button } from 'react-native-paper'
import { View } from 'react-native'

const FlowScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        mode="outlined"
        onPress={() => props.navigation.navigate('flow1')}>
        Benefit list Flow 1
      </Button>
      <Button
        style={{ marginTop: 8 }}
        mode="outlined"
        onPress={() => props.navigation.navigate('Flow 2')}>
        Benefit list Flow 2
      </Button>
      <Button
        style={{ marginTop: 8 }}
        mode="outlined"
        onPress={() => props.navigation.navigate('Flow 3')}>
        Flow 3
      </Button>
    </View>
  )
}

export default FlowScreen
