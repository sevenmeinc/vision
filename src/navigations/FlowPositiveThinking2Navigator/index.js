import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { content } from '../../../assets/content'
import VideoPlayer from '../../screens/PositiveThinking/video'
import PostPromptLoading from '../../screens/PositiveThinking/PostPromptLoading'
import PositiveThinkingPrompt from '../../screens/PositiveThinking/positiveThinkingPrompt'
import PositiveThinkingReframe from '../../screens/PositiveThinking/PositiveThinkingReframe'
import PostActivity1 from '../../screens/PositiveThinking/PostActivity1'
import PostActivity2 from '../../screens/PositiveThinking/PostActivity2'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'
import ProgressHeader from '../../components/ProgressHeader'
import { Colors } from '../../constants/colors'
import CoachHeader from '../../components/CoachHeader'
import InputCard from '../../components/InputCard'
import PromptVideo from '../../screens/PositiveThinking/PromptVideo'
import PositiveThinkingHome from '../../screens/PositiveThinking/ChatScreen'

const Stack = createStackNavigator()
const { activity, postActivity } = content.positiveThinking
const newTimer = { min: 0, sec: 0 }

const FlowPositiveThinking2Navigator = () => {
  const [positiveThinking1, setPositiveThinking1] = useState('')
  const [positiveThinking2, setPositiveThinking2] = useState('')
  const [positiveThinking3, setPositiveThinking3] = useState('')
  const [previews, setPreviews] = useState({ 0: null, 1: null, 2: null })
  const [_, setDuration] = useState(newTimer)
  const [time, setTime] = useState(newTimer)

  const renderItem = ({ item, index }) => {
    return (
      <InputCard
        item={item}
        index={index}
        example={activity.prompts[0].prompt.example}
        positiveThinking1={positiveThinking1}
        setPositiveThinking1={setPositiveThinking1}
        positiveThinking2={positiveThinking2}
        setPositiveThinking2={setPositiveThinking2}
        positiveThinking3={positiveThinking3}
        setPositiveThinking3={setPositiveThinking3}
      />
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="positiveThinkingHome"
        component={PositiveThinkingHome}
        options={{
          headerTitle: 'Chat'
        }}
      />
      <Stack.Screen
        // name="video"
        name="positiveThinking1"
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
            title={'Part 01'}
            subTitle={'Benefits of Positive Thinking'}
            nextScreen={'postVideo1'}
            hideTapMore={false}
            videoUri={content.positiveThinking.videoUri}
          />
        )}
      />
      <Stack.Screen
        name="postVideo1"
        children={({ props }) => (
          <PositiveThinkingPrompt
            {...props}
            text={activity.prompts[0].prompt.text}
            onNext={activity.prompts[0].prompt.onNext}
            renderItem={renderItem}
            positiveThinking1={positiveThinking1}
            positiveThinking2={positiveThinking2}
            positiveThinking3={positiveThinking3}
          />
        )}
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <ProgressHeader
              navigation={navigation}
              route={route}
              backgroundColor={Colors.doctor}
              fillColor="black"
            />
          ),
          headerLeft: () => null,
          headerRight: () => null,
          headerStyle: { backgroundColor: Colors.doctor }
        })}
      />
      <Stack.Screen
        name="postVideo2"
        children={({ props }) => (
          <PostPromptLoading
            {...props}
            text={activity.prompts[0].contemplation.text}
            onNext={activity.prompts[0].contemplation.onNext}
          />
        )}
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <ProgressHeader
              navigation={navigation}
              route={route}
              backgroundColor={Colors.blueWhale}
              fillColor="white"
            />
          ),
          headerLeft: () => null,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.blueWhale,
            shadowColor: 'transparent'
          }
        })}
      />
      <Stack.Screen
        name="postVideo3"
        children={({ props }) => (
          <PositiveThinkingReframe
            {...props}
            text={activity.prompts[1].prompt.text}
            onNext={activity.prompts[1].prompt.onNext}
            positiveThinking1={positiveThinking1}
            positiveThinking2={positiveThinking2}
            positiveThinking3={positiveThinking3}
            previews={previews}
            setPreviews={setPreviews}
          />
        )}
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <ProgressHeader
              navigation={navigation}
              route={route}
              backgroundColor={Colors.doctor}
              fillColor="black"
            />
          ),
          headerLeft: () => null,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.doctor,
            shadowColor: 'transparent'
          }
        })}
      />
      <Stack.Screen
        name="postVideo4"
        children={({ props }) => (
          <PostPromptLoading
            {...props}
            text={activity.prompts[1].contemplation.text}
            onNext={activity.prompts[1].contemplation.onNext}
          />
        )}
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <ProgressHeader
              navigation={navigation}
              route={route}
              backgroundColor={Colors.blueWhale}
              fillColor="white"
            />
          ),
          headerLeft: () => null,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.blueWhale,
            shadowColor: 'transparent'
          }
        })}
      />
      <Stack.Screen
        name="postVideo5"
        children={(props) => (
          <PostActivity1
            {...props}
            title={postActivity[0].title}
            prompts={postActivity[0].prompts}
            onNext={postActivity[0].onNext}
          />
        )}
        options={({ navigation }) => ({
          headerTitle: () => <CoachHeader navigation={navigation} />,
          headerLeft: () => null,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.cottonField,
            shadowColor: 'transparent'
          }
        })}
      />
      <Stack.Screen
        name="postVideo6"
        children={(props) => (
          <PostActivity2
            {...props}
            title={postActivity[1].title}
            text={postActivity[1].text}
            onNext={postActivity[1].onNext}
          />
        )}
        options={({ navigation }) => ({
          headerTitle: () => <CoachHeader navigation={navigation} />,
          headerLeft: () => null,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.cottonField,
            shadowColor: 'transparent'
          }
        })}
      />
      <Stack.Screen
        name="videoPrompt"
        children={(props) => (
          <PromptVideo
            {...props}
            setDuration={setDuration}
            time={time}
            setTime={setTime}
          />
        )}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default FlowPositiveThinking2Navigator
