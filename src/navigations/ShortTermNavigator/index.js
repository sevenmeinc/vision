import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { modalOptions } from '../utils'
import ShortTermBenefits from '../../screens/flow2/ShortTermBenefits'
import ShortTermHeader from '../../components/ShortTermHeader'

const Stack = createStackNavigator()
const ShortTermNavigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen
        name="shortTerm"
        component={ShortTermBenefits}
        options={({ navigation }) => ({
          header: () => <ShortTermHeader navigation={navigation} />
        })}
      />
    </Stack.Navigator>
  )
}
export default ShortTermNavigator
