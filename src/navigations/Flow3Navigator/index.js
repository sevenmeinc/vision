import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import Flow3 from '../../screens/BenefitListFlow3/Flow3'
import ReflectionHome from '../../screens/ReflectionHome'
import Header from '../../components/Header'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'
import PromptAudio from '../../screens/SucHab01Screens/PromptAudio'
import PromptVideo from '../../screens/SucHab01Screens/PromptVideo'
import PromptText from '../../screens/SucHab01Screens/PromptText'
import { content } from '../../../assets/content'

const Stack = createStackNavigator()
const Flow3Navigator = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Flow 3" component={Flow3} />
      <Stack.Screen
        name="reflectionHome"
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Reflection activity" />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <ReflectionHome
            {...props}
            onPress={() => navigation.navigate('PromptAudio')}
          />
        )}
      />
      <Stack.Screen
        name="PromptAudio"
        component={PromptAudio}
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={5}
              homeScreen={'Flow 3'}
              navigation={navigation}
            />
          ),
          presentation: 'card'
        })}
      />
      <Stack.Screen
        name="PromptVideo"
        options={{ headerShown: false }}
        children={(props) => (
          <PromptVideo
            {...props}
            route={{
              params: {
                ...content.successfulHabits,
                state: {
                  responses: 0,
                  stage: 0
                }
              }
            }}
          />
        )}
      />
      <Stack.Screen name="PromptText" component={PromptText} />
    </Stack.Navigator>
  )
}
export default Flow3Navigator
