import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
// import PreActivity from '../../screens/SucHab01Screens/PreActivity'
import PreActivityCard from '../../components/PreActivityCard'
import SuccessfulHabits from '../../screens/SucHab01Screens/SuccessfulHabits'
// import BreatheScreen from '../../screens/SucHab01Screens/Breathe'
// import Breathe from '../../components/Breathe'
// import Breathe2 from '../../components/Breathe/Breather2'
import PromptAudio from '../../screens/SucHab01Screens/PromptAudio'
import PromptVideo from '../../screens/SucHab01Screens/PromptVideo'
import PromptText from '../../screens/SucHab01Screens/PromptText'
import PostActivity from '../../screens/SucHab01Screens/PostActivity'
import Header from '../../components/Header'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'
import { content } from '../../../assets/content'
import image from '../../../assets/suc-hab-img.png'
import BreatheScreen from '../../screens/SucHab01Screens/Breathe'

const Stack = createStackNavigator()
const { title, timeEst, description, prompts } = content.successfulHabits

const SucHab01Navigator = () => {
  const navigation = useNavigation()

  const [stage, setStage] = useState(0)
  const [responses, setresponses] = useState(0)
  const [isPreview, setIsPreview] = useState(false)

  return (
    <Stack.Navigator>
      <Stack.Screen name="SuccessfulHabits01" component={SuccessfulHabits} />
      <Stack.Screen
        name="PreActivity"
        // component={PreActivity}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Reflection activity" />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <PreActivityCard
            {...props}
            image={image}
            title={title}
            timeEst={timeEst}
            description={description}
            handleBtn1={() => navigation.navigate('Breathe')}
            handleBtn2={() => navigation.goBack()}
          />
        )}
      />
      <Stack.Screen
        name="Breathe"
        // component={BreatheScreen}
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={1}
              total={3}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <BreatheScreen
            {...props}
            prompt={prompts[responses]}
            handleNext={() => navigation.navigate('PromptAudio1')}
          />
        )}
      />
      <Stack.Screen
        name="Breathe2"
        // component={BreatheScreen}
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
          <BreatheScreen
            {...props}
            handleNext={() => navigation.navigate('PromptAudio1')}
          />
        )}
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
