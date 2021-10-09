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
import PreviewScreen from '../../screens/SucHab01Screens/PreviewScreen'

const Stack = createStackNavigator()
const { title, timeEst, description, prompts } = content.successfulHabits
const newTimer = { min: 0, sec: 0 }

const SucHab01Navigator = () => {
  const navigation = useNavigation()

  const [stage, setStage] = useState(0)
  const [responses, setresponses] = useState(0)
  const [isPreview, setIsPreview] = useState(false)
  const [imgUri, setImgUri] = useState(null)
  const [preview, setPreview] = useState(false)
  const [duration, setDuration] = useState(newTimer)
  const [time, setTime] = useState(newTimer)

  return (
    <Stack.Navigator>
      <Stack.Screen name="SuccessfulHabits01" component={SuccessfulHabits} />
      <Stack.Screen
        name="PreActivity"
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
            prompt={prompts[0].prompt}
            textScreen={'PromptText1'}
            videoScreen={'PromptVideo1'}
            handleNext={'Breathe2'}
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
            prompt={prompts[1].prompt}
            textScreen={'PromptText2'}
            videoScreen={'PromptVideo2'}
            handleNext={'PostActivity'}
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
          <PromptVideo
            {...props}
            setIsPreview={setIsPreview}
            prompt={prompts[0].prompt}
          />
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
          <PromptVideo
            {...props}
            setIsPreview={setIsPreview}
            prompt={prompts[1].prompt}
          />
        )}
      />
      <Stack.Screen
        name="Preview1"
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
          <PreviewScreen
            {...props}
            prompt={prompts[0].prompt}
            imgUri={imgUri}
            duration={duration}
            time={time}
            handleNext={'Breathe2'}
          />
        )}
      />
      <Stack.Screen
        name="Preview2"
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
          <PreviewScreen
            {...props}
            prompt={prompts[1].prompt}
            imgUri={imgUri}
            duration={duration}
            time={time}
            handleNext={'PostActivity'}
          />
        )}
      />
      <Stack.Screen
        name="PromptText1"
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
          <PromptText
            {...props}
            prompt={prompts[0].prompt}
            handleNext={'Breathe2'}
            audioScreen={'PromptAudio1'}
            videoScreen={'PromptVideo1'}
          />
        )}
      />
      <Stack.Screen
        name="PromptText2"
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
          <PromptText
            {...props}
            prompt={prompts[1].prompt}
            handleNext={'Breathe2'}
            audioScreen={'PromptAudio2'}
            videoScreen={'PromptVideo2'}
          />
        )}
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
