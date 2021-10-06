import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { modalOptions } from '../utils'
import Flow3 from '../../screens/BenefitListFlow3/Flow3'
import SelectionScreen from '../../screens/BenefitListFlow3/SelectionScreen'
import ReflectionHome from '../../screens/ReflectionHome'
import Header from '../../components/Header'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'

const Stack = createStackNavigator()
const Flow3Navigator = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Flow 3" component={Flow3} />
      <Stack.Screen
        name="reflectionHome"
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
          presentation: 'modal'
        })}
        children={(props) => (
          <ReflectionHome
            {...props}
            onPress={() => navigation.navigate('selectionScreen')}
          />
        )}
      />
      <Stack.Screen
        name="selectionScreen"
        component={SelectionScreen}
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              progress={2}
              homeScreen={'Flow 3'}
              navigation={navigation}
            />
          ),
          presentation: 'card'
        })}
      />
    </Stack.Navigator>
  )
}
export default Flow3Navigator
