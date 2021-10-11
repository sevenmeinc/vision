import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Dimensions, SafeAreaView, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import VideoPlayer from '../../screens/PositiveThinking/video'
import PostVideo1 from '../../screens/PositiveThinking/postVideo1'
import PostVideo2 from '../../screens/PositiveThinking/postVideo2'
import PostVideo3 from '../../screens/PositiveThinking/postVideo3'
import PostVideo4 from '../../screens/PositiveThinking/postVideo4'
import PostVideo5 from '../../screens/PositiveThinking/postVideo5'
import PostVideo6 from '../../screens/PositiveThinking/postVideo6'
import { Colors } from '../../constants/colors'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'
import InputCard from '../../components/InputCard'

const FlowPositiveThinkingActivity = () => {
  const Stack = createStackNavigator()

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

  const Progress = ({ navigation, route, backgroundColor, fillColor }) => {
    const ScreenWidth = Dimensions.get('window').width
    return (
      <SafeAreaView
        style={{
          width: ScreenWidth - 30,
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: backgroundColor ? backgroundColor : 'white'
        }}>
        {
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: fillColor ? fillColor : 'white',
                marginRight: 8,
                opacity: route.name === 'video' ? 1 : 0.15
              }}
            />
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: fillColor ? fillColor : 'white',
                marginRight: 8,
                opacity: route.name === 'postVideo1' ? 1 : 0.15
              }}
            />
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: fillColor ? fillColor : 'white',
                marginRight: 8,
                opacity: route.name === 'postVideo2' ? 1 : 0.15
              }}
            />
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: fillColor ? fillColor : 'white',
                marginRight: 8,
                opacity: route.name === 'postVideo3' ? 1 : 0.15
              }}
            />
            <View
              style={{
                width: 45,
                height: 2,
                backgroundColor: fillColor ? fillColor : 'white',
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
            color={fillColor ? fillColor : 'white'}
            onPress={() => navigation.navigate('positiveThinkingHome')}
          />
        </View>
      </SafeAreaView>
    )
  }

  const CoachHeader = ({ navigation }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: Colors.cottonField,
          width: '100%',
          alignItems: 'center'
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../../../assets/coachHeader.png')}
            style={{ marginRight: 12 }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{ fontSize: 17, fontWeight: 'bold', color: '#16161a' }}>
              Haylie Gouse
            </Text>
            <Text style={{ fontSize: 14, color: '#666666' }}>
              Positive Thinking
            </Text>
          </View>
        </View>
        <Ionicons
          name="md-close-sharp"
          size={24}
          color="black"
          onPress={() => navigation.navigate('positiveThinkingHome')}
        />
      </View>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="video1"
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
          <VideoPlayer {...props} nextScreen={'postVideo1'} />
        )}
      />
      <Stack.Screen
        name="postVideo1"
        children={({ navigation }) => (
          <PostVideo1 navigation={navigation} renderItem={renderItem} />
        )}
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <Progress
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
            <Progress
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
          />
        )}
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <Progress
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
            <Progress
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
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <CoachHeader navigation={navigation} route={route} />
          ),
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
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <CoachHeader navigation={navigation} route={route} />
          ),
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

export default FlowPositiveThinkingActivity
