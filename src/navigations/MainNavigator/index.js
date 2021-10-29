import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import Flow1Navigator from '../Flow1Navigator'
import Flow2Navigator from '../Flow2Navigator'
import FlowPositiveThinking1Navigator from '../FlowPositiveThinking1Navigator'

import Flow3Navigator from '../Flow3Navigator'
import SucHab01Navigator from '../SucHab01Navigator'
import FlowPositiveThinking2Navigator from '../FlowPositiveThinking2Navigator'

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
        name="positiveThinkingFlow1"
        component={FlowPositiveThinking1Navigator}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="positiveThinkingFlow2"
        component={FlowPositiveThinking2Navigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SucHab01"
        component={SucHab01Navigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
