import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import Flow1 from '../../screens/Flow1'
import Flow2 from '../../screens/Flow2'

const Stack = createStackNavigator()
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Flows" component={FlowScreen} />
      <Stack.Screen name="flow1" component={Flow1} />
      <Stack.Screen name="flow2" component={Flow2} />
    </Stack.Navigator>
  )
}
export default MainNavigator
