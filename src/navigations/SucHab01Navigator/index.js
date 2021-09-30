import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { modalOptions } from '../utils'
import PreActivity from '../../screens/SucHabScreens/PreActivity'
import SuccessfulHabits from '../../screens/SucHabScreens/SuccessfulHabits'

const Stack = createStackNavigator()
const SucHab01Navigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen name="SuccessfulHabits01" component={SuccessfulHabits} />
      <Stack.Screen name="PreActivity" component={PreActivity} />
    </Stack.Navigator>
  )
}
export default SucHab01Navigator
