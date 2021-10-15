import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../../components/Header'
import FlowPositiveThinking from '../../screens/FlowPositiveThinking'
import Modal1 from '../../screens/PositiveThinking/modal1'
import Modal2 from '../../screens/PositiveThinking/modal2'
import Modal3 from '../../screens/PositiveThinking/modal3'
import Modal4 from '../../screens/PositiveThinking/modal4'
import VideoPlayer from '../../screens/PositiveThinking/video'
import PostVideo1 from '../../screens/PositiveThinking/postVideo1'
import PostVideo2 from '../../screens/PositiveThinking/postVideo2'
import PostVideo3 from '../../screens/PositiveThinking/postVideo3'
import PostVideo4 from '../../screens/PositiveThinking/postVideo4'
import PostVideo5 from '../../screens/PositiveThinking/postVideo5'
import PostVideo6 from '../../screens/PositiveThinking/postVideo6'

import InputCard from '../../components/InputCard'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'
import ProgressHeader from '../../components/ProgressHeader'
import { Colors } from '../../constants/colors'
import CoachHeader from '../../components/CoachHeader'

const Stack = createStackNavigator()

const FlowPositiveThinkingNavigator = () => {
  const [isPreview, setIsPreview] = useState(false)
  const [positiveThinking1, setPositiveThinking1] = useState('')
  const [positiveThinking2, setPositiveThinking2] = useState('')
  const [positiveThinking3, setPositiveThinking3] = useState('')

  const renderItem = ({ item, index }) => {
    return (
      <InputCard
        item={item}
        index={index}
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
        component={FlowPositiveThinking}
        options={{
          headerTitle: 'Chat'
        }}
      />
      <Stack.Screen
        name="positiveThinking1"
        component={Modal1}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          ),
          presentation: 'modal'
        })}
      />
      <Stack.Screen
        name="positiveThinking2"
        component={Modal2}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          ),
          presentation: 'card'
        })}
      />
      <Stack.Screen
        name="positiveThinking3"
        component={Modal3}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          )
        })}
      />
      <Stack.Screen
        name="positiveThinking4"
        component={Modal4}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          )
        })}
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
            title={'Part 01'}
            subTitle={'Benefits of Positive Thinking'}
            nextScreen={'postVideo1'}
            hideTapMore={false}
          />
        )}
      />
      <Stack.Screen
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
      />
      <Stack.Screen
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
      />
      <Stack.Screen
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
      />
      <Stack.Screen
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
      />
      <Stack.Screen
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
      />
      <Stack.Screen
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
      />
    </Stack.Navigator>
  )
}

export default FlowPositiveThinkingNavigator
