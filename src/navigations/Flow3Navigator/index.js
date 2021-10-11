import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import Flow3 from '../../screens/BenefitListFlow3/Flow3'
import ReviewBenefitList from '../../screens/BenefitListFlow3/ReviewBenefitList'
import ReflectionHome from '../../screens/ReflectionHome'
import Header from '../../components/Header'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'
import PromptAudio from '../../screens/SucHab01Screens/PromptAudio'
import PromptVideo from '../../screens/SucHab01Screens/PromptVideo'
import PromptText from '../../screens/SucHab01Screens/PromptText'
import PostActivity from '../../screens/SucHab01Screens/PostActivity'
import BreatheScreen from '../../screens/SucHab01Screens/Breathe'
import PreviewScreen from '../../screens/SucHab01Screens/PreviewScreen'
import { content } from '../../../assets/content'

const Stack = createStackNavigator()
const { prompts, postActivity } = content.successfulHabits
const newTimer = { min: 0, sec: 0 }

const Flow3Navigator = () => {
  const navigation = useNavigation()
  const [isPreview, setIsPreview] = useState(false)
  const [imgUri, setImgUri] = useState(null)
  const [duration, setDuration] = useState(newTimer)
  const [time, setTime] = useState(newTimer)
  const [shortTermBenefits, setShortTermBenefits] = useState('')
  const [longTermBenefits, setLongTermBenefits] = useState('')

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
            onPress={() => navigation.navigate('PromptAudio1')}
          />
        )}
      />
      <Stack.Screen
        name="PromptAudio1"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={5}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <PromptAudio
            {...props}
            prompt={'Short-term benefits'}
            description={
              'Tell us all the short-term benefits that you imagine gaining from completing your Weekly Commitment.'
            }
            textScreen={'PromptText1'}
            videoScreen={'PromptVideo1'}
            nextScreen={'Breathe'}
          />
        )}
      />
      <Stack.Screen
        name="PromptAudio2"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={4}
              total={5}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <PromptAudio
            {...props}
            prompt={'Long-term benefits'}
            description={
              'What are the long-term benefits you imagine gaining from completing your Weekly Commitment?'
            }
            textScreen={'PromptText2'}
            videoScreen={'PromptVideo2'}
            nextScreen={'ReviewBenefitList'}
          />
        )}
      />
      <Stack.Screen
        name="PromptVideo1"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={5}
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
            audioScreen={'PromptAudio1'}
            textScreen={'PromptText1'}
            previewScreen={'Preview1'}
            setImgUri={setImgUri}
            setDuration={setDuration}
            time={time}
            setTime={setTime}
          />
        )}
      />
      <Stack.Screen
        name="PromptVideo2"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={4}
              total={5}
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
            audioScreen={'PromptAudio2'}
            textScreen={'PromptText2'}
            previewScreen={'Preview2'}
            setImgUri={setImgUri}
            setDuration={setDuration}
            time={time}
            setTime={setTime}
          />
        )}
      />
      <Stack.Screen
        name="Preview1"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={5}
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
            nextScreen={'Breathe'}
          />
        )}
      />
      <Stack.Screen
        name="Preview2"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={4}
              total={5}
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
            nextScreen={'ReviewBenefitList'}
          />
        )}
      />
      <Stack.Screen
        name="PromptText1"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={5}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <PromptText
            {...props}
            prompt={prompts[0].prompt}
            setResponse={setShortTermBenefits}
            nextScreen={'Breathe'}
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
              current={4}
              total={5}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <PromptText
            {...props}
            prompt={prompts[1].prompt}
            setResponse={setLongTermBenefits}
            nextScreen={'ReviewBenefitList'}
            audioScreen={'PromptAudio2'}
            videoScreen={'PromptVideo2'}
          />
        )}
      />
      <Stack.Screen
        name="Breathe"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={3}
              total={5}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <BreatheScreen
            {...props}
            prompt={prompts[1]}
            nextScreen={'PromptAudio2'}
            setImgUri={setImgUri}
            setDuration={setDuration}
            setTime={setTime}
          />
        )}
      />
      <Stack.Screen
        name="ReviewBenefitList"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={5}
              total={5}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <ReviewBenefitList
            {...props}
            shortTermBenefits={shortTermBenefits}
            longTermBenefits={longTermBenefits}
            nextScreen={'PostActivity'}
          />
        )}
      />
      <Stack.Screen
        name="PostActivity"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              title={'Benefits List'}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <PostActivity {...props} postActivity={postActivity} />
        )}
      />
    </Stack.Navigator>
  )
}
export default Flow3Navigator
