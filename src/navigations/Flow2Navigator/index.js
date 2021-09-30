import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { modalOptions } from '../utils'
import Flow2 from '../../screens/flow2/Flow2'
import ReflectionHome from '../../screens/flow2/ReflectionHome'
import ShortTermBenefits from '../../screens/flow2/ShortTermBenefits'
import Header from '../../components/Header'
import ShortTermNavigator from '../ShortTermNavigator'

const Stack = createStackNavigator()
const Flow2Navigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen name="Flow 2" component={Flow2} />
      <Stack.Screen
        name="reflectionHome"
        component={ReflectionHome}
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />
        })}
      />
    </Stack.Navigator>
  )
}
export default Flow2Navigator
