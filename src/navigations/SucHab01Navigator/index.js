import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { modalOptions } from '../utils'
import PreActivity from '../../screens/SucHab01Screens/PreActivity'
import SuccessfulHabits from '../../screens/SucHab01Screens/SuccessfulHabits'
import PromptAudio from '../../screens/SucHab01Screens/PromptAudio'

const Stack = createStackNavigator()
const SucHab01Navigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen name="SuccessfulHabits01" component={SuccessfulHabits} />
      <Stack.Screen name="PreActivity" component={PreActivity} />
      <Stack.Screen name="PromptAudio" component={PromptAudio} />
    </Stack.Navigator>
  )
}
export default SucHab01Navigator
