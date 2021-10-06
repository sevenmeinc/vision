<<<<<<< HEAD
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import Flow2Navigator from '../Flow2Navigator'
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
    </Stack.Navigator>
  )
}
export default MainNavigator
=======
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowScreen from '../../screens/FlowScreen'
import Flow1 from '../../screens/Flow1'
import Flow2Navigator from '../Flow2Navigator'
import SuccessfulHabits from '../../screens/SuccessfulHabits'
import Breathe from '../../components/Breathe'

const Stack = createStackNavigator()
const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Flows" component={FlowScreen} />
      <Stack.Screen name="flow1" component={Flow1} />
      <Stack.Screen
        name="Flow 2"
        component={Flow2Navigator}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="SuccessfulHabits01" component={SuccessfulHabits} />
      <Stack.Screen name="Breathe" component={Breathe} />
    </Stack.Navigator>
  )
}
export default MainNavigator
>>>>>>> 531128b (PreactivityCard)
