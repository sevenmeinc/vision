import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { content } from '../../../assets/content'
import Header from '../../components/Header'
import PositiveThinkingHome from '../../screens/PositiveThinking/ChatScreen'
import banner1 from '../../../assets/PositiveThinking/modal-banner1.png'
import banner2 from '../../../assets/PositiveThinking/modal-banner2.png'
import banner3 from '../../../assets/PositiveThinking/modal-banner3.png'
import banner4 from '../../../assets/PositiveThinking/modal-banner4.png'
import CardOfSeries from '../../components/PreActivityCard/CardOfSeries'

const Stack = createStackNavigator()

const { preActivity } = content.positiveThinking

const FlowPositiveThinking1Navigator = () => {
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
          presentation: 'card'
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
          presentation: 'card'
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
          presentation: 'card'
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
    </Stack.Navigator>
  )
}

export default FlowPositiveThinking1Navigator
