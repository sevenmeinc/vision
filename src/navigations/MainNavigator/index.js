import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import Flow1 from '../../screens/Flow1'
import Flow2Navigator from '../Flow2Navigator'
import Flow1Navigator from '../Flow1Navigator'

const Stack = createStackNavigator()
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Flows" component={Flow1Navigator} />
      <Stack.Screen name="flow1" component={Flow1} />
      <Stack.Screen
        name="Flow 2"
        component={Flow2Navigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
export default MainNavigator
