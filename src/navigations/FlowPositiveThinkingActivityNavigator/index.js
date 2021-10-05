import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Header from '../../components/Header'
import VideoPlayer from '../../screens/PositiveThinking/video'
import PostVideo1 from '../../screens/PositiveThinking/postVideo1'
import PostVideo2 from '../../screens/PositiveThinking/postVideo2'
import PostVideo3 from '../../screens/PositiveThinking/postVideo3'
import PostVideo4 from '../../screens/PositiveThinking/postVideo4'
import PostVideo5 from '../../screens/PositiveThinking/postVideo5'
import PostVideo6 from '../../screens/PositiveThinking/postVideo6'
import { Colors } from '../../constants/colors'

const FlowPositiveThinkingActivity = () => {
  const Stack = createStackNavigator()

  const Progress = ({ navigation, route }) => {
    const ScreenWidth = Dimensions.get('window').width
    return (
      <View
        style={{
          width: ScreenWidth - 30,
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        {
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: Colors.pianoBlack,
                marginRight: 8,
                opacity: route.name === 'video' ? 1 : 0.15
              }}
            />
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: Colors.pianoBlack,
                marginRight: 8,
                opacity: route.name === 'postVideo1' ? 1 : 0.15
              }}
            />
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: Colors.pianoBlack,
                marginRight: 8,
                opacity: route.name === 'postVideo2' ? 1 : 0.15
              }}
            />
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: Colors.pianoBlack,
                marginRight: 8,
                opacity: route.name === 'postVideo3' ? 1 : 0.15
              }}
            />
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: Colors.pianoBlack,
                marginRight: 8,
                opacity: route.name === 'postVideo4' ? 1 : 0.15
              }}
            />
          </View>
        }

        <View>
          <Ionicons
            name="md-close-sharp"
            size={24}
            color={Colors.pianoBlack}
            onPress={() => navigation.navigate('positiveThinkingHome')}
          />
        </View>
      </View>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="video1"
        component={VideoPlayer}
        options={({ navigation }) => ({
          header: () => (
            <Header
              navigation={navigation}
              title="Positive thinking"
              home="positiveThinkingHome"
            />
          )
        })}
      />
      <Stack.Screen
        name="postVideo1"
        component={PostVideo1}
        options={({ navigation, route }) => ({
          headerTitle: () => <Progress navigation={navigation} route={route} />,
          headerLeft: () => null,
          headerRight: () => null
        })}
      />
      <Stack.Screen
        name="postVideo2"
        component={PostVideo2}
        options={({ navigation, route }) => ({
          headerTitle: () => <Progress navigation={navigation} route={route} />,
          headerLeft: () => null,
          headerRight: () => null
        })}
      />
      <Stack.Screen
        name="postVideo3"
        component={PostVideo3}
        options={({ navigation, route }) => ({
          headerTitle: () => <Progress navigation={navigation} route={route} />,
          headerLeft: () => null,
          headerRight: () => null
        })}
      />
      <Stack.Screen
        name="postVideo4"
        component={PostVideo4}
        options={({ navigation, route }) => ({
          headerTitle: () => <Progress navigation={navigation} route={route} />,
          headerLeft: () => null,
          headerRight: () => null
        })}
      />
      <Stack.Screen name="postVideo5" component={PostVideo5} />
      <Stack.Screen name="postVideo6" component={PostVideo6} />
    </Stack.Navigator>
  )
}

export default FlowPositiveThinkingActivity
