import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { modalOptions } from '../utils'
import PreActivity from '../../screens/SucHab01Screens/PreActivity'
import SuccessfulHabits from '../../screens/SucHab01Screens/SuccessfulHabits'
import Prompts from '../../screens/SucHab01Screens/Prompts'

const Stack = createStackNavigator()
const SucHab01Navigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen name="SuccessfulHabits01" component={SuccessfulHabits} />
      <Stack.Screen name="PreActivity" component={PreActivity} />
      <Stack.Screen name="Prompts" component={Prompts} />
    </Stack.Navigator>
  )
}
export default SucHab01Navigator
