import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PreActivity from '../../screens/SucHab01Screens/PreActivity'
import SuccessfulHabits from '../../screens/SucHab01Screens/SuccessfulHabits'
import BreatheScreen from '../../screens/SucHab01Screens/Breathe'
import PromptAudio from '../../screens/SucHab01Screens/PromptAudio'
import PromptVideo from '../../screens/SucHab01Screens/PromptVideo'
import PromptText from '../../screens/SucHab01Screens/PromptText'
import PostActivity from '../../screens/SucHab01Screens/PostActivity'
import End from '../../screens/SucHab01Screens/End'
import Header from '../../components/Header'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'

const Stack = createStackNavigator()
const SucHab01Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SuccessfulHabits01" component={SuccessfulHabits} />
      <Stack.Screen
        name="PreActivity"
        component={PreActivity}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Reflection activity" />
          ),
          presentation: 'modal'
        })}
      />
      <Stack.Screen
        name="PromptAudio"
        component={PromptAudio}
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={3}
              navigation={navigation}
            />
          )
        })}
      />
      <Stack.Screen
        name="PromptAudio2"
        component={PromptAudio}
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={3}
              total={3}
              navigation={navigation}
            />
          )
        })}
      />
      <Stack.Screen
        name="PromptVideo"
        component={PromptVideo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PromptText"
        component={PromptText}
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={3}
              navigation={navigation}
            />
          )
        })}
      />
      <Stack.Screen
        name="Breathe"
        component={BreatheScreen}
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={1}
              total={3}
              navigation={navigation}
            />
          )
        })}
      />
      <Stack.Screen
        name="Breathe2"
        component={BreatheScreen}
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={3}
              navigation={navigation}
            />
          )
        })}
      />
      <Stack.Screen
        name="PostActivity"
        component={PostActivity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="End"
        component={End}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
export default SucHab01Navigator
