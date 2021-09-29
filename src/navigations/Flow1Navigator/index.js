import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { modalOptions } from '../utils'
import ReflectionHome from '../../screens/ReflectionHome'
import Flow2 from '../../screens/Flow2'

const Stack = createStackNavigator()
const Flow1Navigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen name="Flow2" component={Flow2} />
      <Stack.Screen name="reflectionHome" component={ReflectionHome} />
    </Stack.Navigator>
  )
}
export default Flow1Navigator
