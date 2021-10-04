import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import Flow2Navigator from '../Flow2Navigator'
import FlowPositiveThinkingNavigator from '../FlowPositiveThinkingNavigator'
import ShortTermNavigator from '../ShortTermNavigator'
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

      <Stack.Screen
        name="positiveThinking"
        component={FlowPositiveThinkingNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
export default MainNavigator
