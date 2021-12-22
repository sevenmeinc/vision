import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Flow3 from '../../screens/BenefitListFlow3/Flow3'
import ReviewBenefitList from '../../screens/BenefitListFlow3/ReviewBenefitList'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'
import PromptAudio from '../../screens/SucHab01Screens/PromptAudio'
import PromptVideo from '../../screens/SucHab01Screens/PromptVideo'
import PromptText from '../../screens/SucHab01Screens/PromptText'
import PostActivity from '../../screens/SucHab01Screens/PostActivity'
import BreatheScreen from '../../screens/SucHab01Screens/Breathe'
import PreviewScreen from '../../screens/SucHab01Screens/PreviewScreen'
import VideoPlayer from '../../screens/PositiveThinking/video'
import { content } from '../../../assets/content'

const Stack = createStackNavigator()
const { prompts, postActivity } = content.benefitsList
const newTimer = { min: 0, sec: 0 }

const Flow3Navigator = () => {
  const [isPreview, setIsPreview] = useState(false)
  const [audioResponse, setAudioResponse] = useState()
  const [imgUri, setImgUri] = useState(null)
  const [duration, setDuration] = useState(newTimer)
  const [time, setTime] = useState(newTimer)
  const [shortTermBenefits, setShortTermBenefits] = useState('')
  const [longTermBenefits, setLongTermBenefits] = useState('')

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Flow 3"
        component={Flow3}
        options={{
          headerTitle: 'Chat'
        }}
      />
      <Stack.Screen
        name="video"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={1}
              total={5}
              navigation={navigation}
              darkMode={true}
            />
          )
        })}
        children={(props) => (
          <VideoPlayer
            {...props}
            title={'REFLECTION ACTIVITY'}
            subTitle={'Benefits List'}
            nextScreen={'PromptAudio1'}
            hideTapMore={true}
            videoUri={content.benefitsList.videoUri}
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
            isPreview={audioResponse}
            setIsPreview={setAudioResponse}
            prompt={prompts[0].prompt}
            description={prompts[0].contemplation}
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
            isPreview={audioResponse}
            setIsPreview={setAudioResponse}
            prompt={prompts[1].prompt}
            description={prompts[1].contemplation}
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
              paddingTop={0}
            />
          ),
          headerShown: isPreview,
          presentation: 'modal'
        })}
        children={(props) => (
          <PromptVideo
            {...props}
            setIsPreview={setIsPreview}
            prompt={prompts[2].prompt}
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
              paddingTop={0}
            />
          ),
          headerShown: isPreview,
          presentation: 'modal'
        })}
        children={(props) => (
          <PromptVideo
            {...props}
            setIsPreview={setIsPreview}
            prompt={prompts[3].prompt}
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
              paddingTop={0}
            />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <PreviewScreen
            {...props}
            prompt={prompts[2].prompt}
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
              paddingTop={0}
            />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <PreviewScreen
            {...props}
            prompt={prompts[3].prompt}
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
              paddingTop={0}
            />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <PromptText
            {...props}
            prompt={prompts[2].prompt}
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
              paddingTop={0}
            />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <PromptText
            {...props}
            prompt={prompts[3].prompt}
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
