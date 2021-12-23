import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { content } from '../../../assets/content'
import Header from '../../components/Header'
import PositiveThinkingHome from '../../screens/PositiveThinking/ChatScreen'
import banner1 from '../../../assets/PositiveThinking/modal-banner1.png'
import banner2 from '../../../assets/PositiveThinking/modal-banner2.png'
import banner3 from '../../../assets/PositiveThinking/modal-banner3.png'
import banner4 from '../../../assets/PositiveThinking/modal-banner4.png'
import CardOfSeries from '../../components/PreActivityCard/CardOfSeries'
import PositiveThinkingPrompt from '../../screens/PositiveThinking/positiveThinkingPrompt'
import PositiveThinkingReframe from '../../screens/PositiveThinking/PositiveThinkingReframe'
import PostActivity1 from '../../screens/PositiveThinking/PostActivity1'
import InputCard from '../../components/InputCard'
import PostPromptLoading from '../../screens/PositiveThinking/PostPromptLoading'
import ProgressHeader from '../../components/ProgressHeader'
import CoachHeader from '../../components/CoachHeader'
import { Colors } from '../../constants/colors'

const Stack = createStackNavigator()

const { preActivity, activity, postActivity } = content.positiveThinking

const newTimer = { min: 0, sec: 0 }

const FlowPositiveThinking1Navigator = () => {
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
        name="positiveThinking1"
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <CardOfSeries
            {...props}
            title={preActivity[0].title}
            text={preActivity[0].text}
            img={banner1}
            onNext={preActivity[0].onNext}
            onBack={preActivity[0].onBack}
            isLast={false}
          />
        )}
      />
      <Stack.Screen
        name="positiveThinking2"
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <CardOfSeries
            {...props}
            title={preActivity[1].title}
            text={preActivity[1].text}
            img={banner2}
            onNext={preActivity[1].onNext}
            onBack={preActivity[1].onBack}
            isLast={false}
          />
        )}
      />
      <Stack.Screen
        name="positiveThinking3"
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <CardOfSeries
            {...props}
            title={preActivity[2].title}
            text={preActivity[2].text}
            img={banner3}
            onNext={preActivity[2].onNext}
            onBack={preActivity[2].onBack}
            isLast={false}
          />
        )}
      />
      <Stack.Screen
        name="positiveThinking4"
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <CardOfSeries
            {...props}
            title={preActivity[3].title}
            text={preActivity[3].text}
            img={banner4}
            onNext={preActivity[3].onNext}
            onBack={preActivity[3].onBack}
            isLast={true}
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
            onNext={'positiveThinkingHome'}
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

export default FlowPositiveThinking1Navigator
