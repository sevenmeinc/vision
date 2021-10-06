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
        onPress={() => props.navigation.navigate('flow2Navigator')}>
        Benefit list Flow 2
      </Button>
      <Button
        style={{ marginTop: 8 }}
        mode="outlined"
        onPress={() => props.navigation.navigate('positiveThinking')}>
        Positive Thinking Flow 1
      </Button>
      <Button
        style={{ marginTop: 8 }}
        mode="outlined"
        onPress={() => props.navigation.navigate('SucHab01')}>
        Successful Habits 1
      </Button>
    </View>
  )
}

export default FlowScreen
