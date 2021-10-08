import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PreActivity from '../../screens/SucHab01Screens/PreActivity'
import SuccessfulHabits from '../../screens/SucHab01Screens/SuccessfulHabits'
import BreatheScreen from '../../screens/SucHab01Screens/Breathe'
import PromptAudio from '../../screens/SucHab01Screens/PromptAudio'
import PromptVideo from '../../screens/SucHab01Screens/PromptVideo'
import PromptText from '../../screens/SucHab01Screens/PromptText'
import PostActivity from '../../screens/SucHab01Screens/PostActivity'
import Header from '../../components/Header'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'

const Stack = createStackNavigator()
const SucHab01Navigator = () => {
  const [isPreview, setIsPreview] = useState(false)
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
        name="PromptAudio1"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={3}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <PromptAudio
            {...props}
            nextTextScreen={'PromptText1'}
            nextVideoScreen={'PromptVideo1'}
          />
        )}
      />
      <Stack.Screen
        name="PromptAudio2"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={3}
              total={3}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <PromptAudio
            {...props}
            nextTextScreen={'PromptText2'}
            nextVideoScreen={'PromptVideo2'}
          />
        )}
      />
      <Stack.Screen
        name="PromptVideo1"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={3}
              navigation={navigation}
            />
          ),
          headerShown: isPreview
        })}
        children={(props) => (
          <PromptVideo {...props} setIsPreview={setIsPreview} />
        )}
      />
      <Stack.Screen
        name="PromptVideo2"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={3}
              total={3}
              navigation={navigation}
            />
          ),
          headerShown: isPreview
        })}
        children={(props) => (
          <PromptVideo {...props} setIsPreview={setIsPreview} />
        )}
      />
      <Stack.Screen
        name="PromptText1"
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
        name="PromptText2"
        component={PromptText}
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
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              title={'Past Successful Habits'}
              navigation={navigation}
            />
          )
        })}
      />
    </Stack.Navigator>
  )
}
export default SucHab01Navigator
