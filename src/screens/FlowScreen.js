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
<<<<<<< HEAD
        mode="outlined"
        onPress={() => props.navigation.navigate('flow2Navigator')}>
        Benefit list Flow 2
      </Button>
      <Button
=======
>>>>>>> be4ed6e (clean)
        mode="outlined"
        onPress={() => props.navigation.navigate('SucHab01')}>
        Successful Habits 1
      </Button>
<<<<<<< HEAD
      {/* <Button
        mode="outlined"
        onPress={() => props.navigation.navigate('Breathe')}>
        Breathe
      </Button>
      <Button
        mode="outlined"
        onPress={() => props.navigation.navigate('PreActivityCard')}>
        PreActivityCard
      </Button>
      <Button
        mode="outlined"
        onPress={() => props.navigation.navigate('AuxRecorderPlayer')}>
        AuxRecorderPlayer
<<<<<<< HEAD
=======
      </Button> */}
=======
>>>>>>> be4ed6e (clean)
      <Button
        style={{ marginTop: 8 }}
        mode="outlined"
        onPress={() => props.navigation.navigate('Flow 2')}>
        Flow 2
>>>>>>> e8ef80c (WIP nav to PreActivity - sanity save)
      </Button>
    </View>
  )
}

export default FlowScreen
