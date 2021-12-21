import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { content } from '../../../assets/content'
import VideoPlayer from '../../screens/PositiveThinking/video'
// import PostVideo1 from '../../screens/PositiveThinking/postVideo1'
// import PostVideo2 from '../../screens/PositiveThinking/postVideo2'
// import PostVideo3 from '../../screens/PositiveThinking/postVideo3'
// import PostVideo4 from '../../screens/PositiveThinking/postVideo4'
// import PostVideo5 from '../../screens/PositiveThinking/postVideo5'
// import PostVideo6 from '../../screens/PositiveThinking/postVideo6'
// import PromptVideo from '../../screens/SucHab01Screens/PromptVideo'
import PostPromptLoading from '../../screens/PositiveThinking/PostPromptLoading'
import PositiveThinkingPrompt from '../../screens/PositiveThinking/PositiveThinkingPrompt'
import PositiveThinkingReframe from '../../screens/PositiveThinking/PositiveThinkingReframe'
import PostActivity1 from '../../screens/PositiveThinking/PostActivity1'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'
import ProgressHeader from '../../components/ProgressHeader'
import { Colors } from '../../constants/colors'
import CoachHeader from '../../components/CoachHeader'
import InputCard from '../../components/InputCard'
import { content } from '../../../assets/content'

const Stack = createStackNavigator()
const { activity, postActivity } = content.positiveThinking

const FlowPositiveThinking2Navigator = () => {
  const [isPreview, setIsPreview] = useState(false)
  const [positiveThinking1, setPositiveThinking1] = useState('')
  const [positiveThinking2, setPositiveThinking2] = useState('')
  const [positiveThinking3, setPositiveThinking3] = useState('')

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
            title={'Part 01'}
            subTitle={'Benefits of Positive Thinking'}
            nextScreen={'postVideo1'}
            hideTapMore={false}
            videoUri={content.positiveThinking.videoUri}
          />
        )}
      />
      {/* <Stack.Screen
        name="postVideo1"
        children={({ navigation }) => (
          <PostVideo1
            navigation={navigation}
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
      /> */}
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
      {/* <Stack.Screen
        name="postVideo2"
        component={PostVideo2}
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
      /> */}
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
      {/* <Stack.Screen
        name="postVideo3"
        children={({ navigation }) => (
          <PostVideo3
            navigation={navigation}
            positiveThinking1={positiveThinking1}
            positiveThinking2={positiveThinking2}
            positiveThinking3={positiveThinking3}
            setIsPreview={setIsPreview}
            isPreview={isPreview}
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
      /> */}
      <Stack.Screen
        name="postVideo3"
        children={({ props }) => (
          <PositiveThinkingReframe
            {...props}
            text={activity.prompts[1].prompt.text}
            onNext={activity.prompts[1].prompt.onNext}
            renderItem={renderItem}
            positiveThinking1={positiveThinking1}
            positiveThinking2={positiveThinking2}
            positiveThinking3={positiveThinking3}
            setIsPreview={setIsPreview}
            isPreview={isPreview}
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
      {/* <Stack.Screen
        name="postVideo4"
        component={PostVideo4}
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
      /> */}
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
      {/* <Stack.Screen
        name="postVideo5"
        component={PostVideo5}
        options={({ navigation }) => ({
          headerTitle: () => <CoachHeader navigation={navigation} />,
          headerLeft: () => null,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.cottonField,
            shadowColor: 'transparent'
          }
        })}
      /> */}
      <Stack.Screen
        name="postVideo5"
        // component={PostVideo5}
        children={(props) => (
          <PostActivity1
            {...props}
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
      {/* <Stack.Screen
        name="postVideo6"
        component={PostVideo6}
        options={({ navigation }) => ({
          headerTitle: () => <CoachHeader navigation={navigation} />,
          headerLeft: () => null,
          headerRight: () => null,
          headerStyle: {
            backgroundColor: Colors.cottonField,
            shadowColor: 'transparent'
          }
        })}
      /> */}
      <Stack.Screen
        name="postVideo6"
        // component={PostVideo6}
        children={(props) => (
          <PostActivity1
            {...props}
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
    </Stack.Navigator>
  )
}

export default FlowPositiveThinking2Navigator
