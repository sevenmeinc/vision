import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import Flow1 from '../../screens/BenefitListFlow2/Flow2'
import ReflectionHome from '../../screens/ReflectionHome'
import GetStarted from '../../screens/BenefitListFlow1/GetStarted'
import Chat from '../../screens/BenefitListFlow1/Chat'
import BenefitList from '../../screens/BenefitListFlow1/BenefitList'
import { Colors } from '../../constants/colors'
import FeedbackScreen from '../../screens/BenefitListFlow1/Feedback'
import Header from '../../components/Header'

const Stack = createStackNavigator()
const ScreenWidth = Dimensions.get('window').width
const ChatStack = createStackNavigator()

const Progress = ({ navigation, route }) => {
  const isFeedBack = route.name === 'Feedback'
  return (
    <View
      style={{
        width: ScreenWidth - 30,
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      {isFeedBack ? (
        <View>
          <Text style={{ fontFamily: 'semiBold', fontSize: 17 }}>
            Benefits List
          </Text>
        </View>
      ) : (
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              width: 45,
              height: 2,
              backgroundColor: Colors.pianoBlack,
              marginRight: 8,
              opacity: route.name === 'GetStarted_1' ? 1 : 0.15
            }}
          />
          <View
            style={{
              width: 45,
              height: 2,
              backgroundColor: Colors.pianoBlack,
              marginRight: 8,
              opacity: route.name === 'Chat' ? 1 : 0.15
            }}
          />
          <View
            style={{
              width: 45,
              height: 2,
              backgroundColor: Colors.pianoBlack,
              marginRight: 8,
              opacity: route.name === 'BenefitList' ? 1 : 0.15
            }}
          />
        </View>
      )}

      <View>
        <Ionicons
          name="md-close-sharp"
          size={24}
          color={Colors.pianoBlack}
          onPress={() => navigation.navigate('Flow1')}
        />
      </View>
    </View>
  )
}

const ChatStackNavigator = () => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent'
        }
      }}>
      <Stack.Screen
        name="GetStarted_1"
        component={GetStarted}
        options={({ navigation, route }) => ({
          headerTitle: () => <Progress navigation={navigation} route={route} />,
          headerLeft: () => null,
          headerRight: () => null
        })}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ navigation, route }) => ({
          headerTitle: () => <Progress navigation={navigation} route={route} />,
          headerLeft: () => null,
          headerRight: () => null
        })}
      />
      <Stack.Screen
        name="BenefitList"
        component={BenefitList}
        options={({ navigation, route }) => ({
          headerTitle: () => <Progress navigation={navigation} route={route} />,
          headerLeft: () => null,
          headerRight: () => null
        })}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={({ navigation, route }) => ({
          headerTitle: () => <Progress navigation={navigation} route={route} />,
          headerLeft: () => null,
          headerRight: () => null
        })}
      />
    </ChatStack.Navigator>
  )
}
const Flow1Navigator = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Flow1"
        component={Flow1}
        options={{
          headerTitle: 'Chat'
        }}
      />
      <Stack.Screen
        name="reflectionHome"
        options={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
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
        component={ChatStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
export default Flow1Navigator
