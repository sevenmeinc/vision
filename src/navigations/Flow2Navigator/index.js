import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import { modalOptions } from '../utils'
import Flow1 from '../../screens/Flow1'
import Flow2 from '../../screens/Flow2'

const Stack = createStackNavigator()
const Flow2Navigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen name="flow2" component={Flow2} />
    </Stack.Navigator>
  )
}
export default Flow2Navigator
