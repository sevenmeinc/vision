import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { modalOptions } from '../utils'
import Flow2 from '../../screens/Flow2'
import ReflectionHome from '../../screens/ReflectionHome'

const Stack = createStackNavigator()
const Flow2Navigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen name="Flow 2" component={Flow2} />
      <Stack.Screen name="reflectionHome" component={ReflectionHome} />
    </Stack.Navigator>
  )
}
export default Flow2Navigator
