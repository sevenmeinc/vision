import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import Flow1 from '../../screens/BenefitListFlow2/Flow2'
import ReflectionHome from '../../screens/ReflectionHome'
import GetStarted from '../../screens/BenefitListFlow1/GetStarted'
import Chat from '../../screens/BenefitListFlow1/Chat'
import BenefitList from '../../screens/BenefitListFlow1/BenefitList'
import FeedbackScreen from '../../screens/BenefitListFlow1/Feedback'
import Header from '../../components/Header'
import ProgressHeader from '../../components/ProgressHeader'

const Stack = createStackNavigator()

const Flow1Navigator = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Flow 1"
        component={Flow1}
        options={{
          headerTitle: 'Chat'
        }}
      />
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
            onPress={() =>
              navigation.navigate('GetStarted', {
                screen: 'GetStarted'
              })
            }
          />
        )}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={({ navigation }) => ({
          header: () => (
            <ProgressHeader current={1} total={3} navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ navigation }) => ({
          header: () => (
            <ProgressHeader current={2} total={3} navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="BenefitList"
        component={BenefitList}
        options={({ navigation }) => ({
          header: () => (
            <ProgressHeader current={3} total={3} navigation={navigation} />
          )
        })}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={({ navigation }) => ({
          header: () => (
            <Header title={'Benefits List'} navigation={navigation} />
          )
        })}
      />
    </Stack.Navigator>
  )
}
export default Flow1Navigator
