import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { modalOptions } from '../utils'
import PreActivity from '../../screens/SucHab01Screens/PreActivity'
import SuccessfulHabits from '../../screens/SucHab01Screens/SuccessfulHabits'
import Breathe from '../../screens/SucHab01Screens/Breathe'
import PromptAudio from '../../screens/SucHab01Screens/PromptAudio'
import PromptVideo from '../../screens/SucHab01Screens/PromptVideo'
import PromptText from '../../screens/SucHab01Screens/PromptText'

const Stack = createStackNavigator()
const SucHab01Navigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen name="SuccessfulHabits01" component={SuccessfulHabits} />
      <Stack.Screen name="PreActivity" component={PreActivity} />
      <Stack.Screen name="PromptAudio" component={PromptAudio} />
      <Stack.Screen name="PromptVideo" component={PromptVideo} />
      <Stack.Screen name="PromptText" component={PromptText} />
      <Stack.Screen name="Breathe" component={Breathe} />
    </Stack.Navigator>
  )
}
export default SucHab01Navigator
