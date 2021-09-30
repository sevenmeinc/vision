import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import Flow1 from '../../screens/BenefitListFlow1/Flow1'
import Flow2Navigator from '../Flow2Navigator'
import FlowPositiveThinkingNavigator from '../FlowPositiveThinkingNavigator'
import Flow1Navigator from '../Flow1Navigator'

const Stack = createStackNavigator()
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Flows" component={FlowScreen} />
      <Stack.Screen
        name="flow1"
        component={Flow1Navigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Flow 2"
        component={Flow2Navigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Flow 3"
        component={FlowPositiveThinkingNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
export default MainNavigator
