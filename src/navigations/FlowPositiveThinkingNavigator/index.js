import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { modalOptions } from '../utils'
import Header from '../../components/Header'
import FlowPositiveThinking from '../../screens/FlowPositiveThinking'
import Modal1 from '../../screens/PositiveThinking/modal1'
import Modal2 from '../../screens/PositiveThinking/modal2'
import Modal3 from '../../screens/PositiveThinking/modal3'
import Modal4 from '../../screens/PositiveThinking/modal4'

const Stack = createStackNavigator()

const FlowPositiveThinkingModal = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="positiveThinking1"
        component={Modal1}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          )
        })}
      />
      <Stack.Screen
        name="positiveThinking2"
        component={Modal2}
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Positive thinking" />
          )
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
    </Stack.Navigator>
  )
}

const FlowPositiveThinkingNavigator = () => {
  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen
        name="Flow Positive Thinking"
        component={FlowPositiveThinking}
      />
      <Stack.Screen
        name="positiveThinking1"
        component={FlowPositiveThinkingModal}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default FlowPositiveThinkingNavigator
