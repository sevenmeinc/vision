import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../../components/Header'
import FlowPositiveThinking from '../../screens/FlowPositiveThinking'
import PositiveThinkingHome from '../../screens/PositiveThinking/ChatScreen'
import Modal1 from '../../screens/PositiveThinking/modal1'
import Modal2 from '../../screens/PositiveThinking/modal2'
import Modal3 from '../../screens/PositiveThinking/modal3'
import Modal4 from '../../screens/PositiveThinking/modal4'

const Stack = createStackNavigator()

const FlowPositiveThinking1Navigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="positiveThinkingHome"
        component={FlowPositiveThinking}
        options={{
          headerTitle: 'Chat'
        }}
      /> */}
      <Stack.Screen
        name="positiveThinkingHome"
        component={PositiveThinkingHome}
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
    </Stack.Navigator>
  )
}

export default FlowPositiveThinking1Navigator
