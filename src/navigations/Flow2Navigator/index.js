import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { modalOptions } from '../utils'
import Flow2 from '../../screens/BenefitListFlow2/Flow2'
import ReflectionHome from '../../screens/ReflectionHome'
import Header from '../../components/Header'

const Stack = createStackNavigator()
const Flow2Navigator = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen name="Flow 2" component={Flow2} />
      <Stack.Screen
        name="reflectionHome"
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />
        })}
        children={(props) => (
          <ReflectionHome
            {...props}
            onPress={() => navigation.navigate('shortTermNavigator')}
          />
        )}
      />
    </Stack.Navigator>
  )
}
export default Flow2Navigator
