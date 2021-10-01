import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import Flow1 from '../../screens/Flow1'
import Flow2Navigator from '../Flow2Navigator'
import ShortTermNavigator from '../ShortTermNavigator'

const Stack = createStackNavigator()
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Flows" component={FlowScreen} />
      <Stack.Screen name="flow1" component={Flow1} />
      <Stack.Screen
        name="flow2Navigator"
        component={Flow2Navigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="shortTermNavigator"
        component={ShortTermNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
export default MainNavigator
