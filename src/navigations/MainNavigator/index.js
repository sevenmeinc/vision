import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import Flow2Navigator from '../Flow2Navigator'
import ShortTermNavigator from '../ShortTermNavigator'
import Flow1Navigator from '../Flow1Navigator'
import Flow3Navigator from '../Flow3Navigator'

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
        name="flow3Navigator"
        component={Flow3Navigator}
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
