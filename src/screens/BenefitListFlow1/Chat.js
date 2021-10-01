import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'
import BotMessage from '../../components/BotMessage'
import OutlineButton from '../../components/OutlineButton'
import { Colors } from '../../constants/colors'

function Send(props) {
  return (
    <Svg
      width={29}
      height={29}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={14.438} cy={14.125} r={14.063} fill="#304753" />
      <Path
        d="M14.438 19.594V8.656M8.969 14.125l5.469-5.469 5.468 5.469"
        stroke="#fff"
        strokeWidth={1.563}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

const BotMessagesData = [
  {
    id: 1,
    messages: [
      {
        message: 'Great! FirstQuestion'
      },
      {
        message:
          'What are the short-term benefits you imagine gaining from completing your Weekly Commitment?'
      }
    ]
  },
  {
    id: 1,
    messages: [
      {
        message: "Let's try to comeup with 2 more."
      }
    ]
  },
  {
    id: 1,
    messages: [
      {
        message: 'Good job! Next question:'
      },
      {
        message:
          'What are the long-term benefits you imagine gaining from completing your Weekly Commitment?'
      }
    ]
  },
  {
    id: 1,
    messages: [
      {
        message:
          'Nice! Now let’s review your answers and keep them in the back of your mind.'
      }
    ]
  }
]

const UserMessage = ({ messages }) => {
  return (
    <View style={{ alignItems: 'flex-end', marginBottom: 4 }}>
      <View style={{ width: '65%' }}>
        <View
          style={{
            alignSelf: 'flex-end',
            backgroundColor: Colors.primary,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 16
          }}>
          <Text style={{ color: 'white', fontFamily: 'regular' }}>
            {messages}
          </Text>
        </View>
      </View>
    </View>
  )
}

const Chat = (props) => {
  const [chatMessages, setChatMessages] = useState([BotMessagesData[0]])

  const [text, setText] = useState('')

  const [userResponse, setUserResponse] = useState([])

  const keyExtractor = (item, index) => `${index}-${item}`

  useEffect(() => {
    if (userResponse.length === 1) {
      setChatMessages((prev) => [BotMessagesData[1], ...prev])
    } else if (userResponse.length === 3) {
      setChatMessages((prev) => [BotMessagesData[2], ...prev])
    } else if (userResponse.length === 6) {
      setChatMessages((prev) => [BotMessagesData[3], ...prev])
    }
  }, [userResponse])

  const renderItem = ({ item }) => {
    if (item.id === 1) {
      return <BotMessage messages={item.messages} />
    }
    return <UserMessage messages={item.messages} />
  }

  const onSendMessage = () => {
    if (!text) {
      return
    }
    setText('')
    const newMessage = {
      id: 2,
      messages: text
    }
    setChatMessages((prev) => [newMessage, ...prev])
    setUserResponse((prev) => [...prev, text])
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={120}>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <FlatList
            keyExtractor={keyExtractor}
            data={chatMessages}
            renderItem={renderItem}
            inverted
            showsVerticalScrollIndicator={false}
          />
          {userResponse.length >= 6 ? (
            <View style={{ justifyContent: 'flex-end' }}>
              <View style={{ alignSelf: 'flex-end' }}>
                <OutlineButton
                  title="Continue"
                  onPress={() => {
                    const middleIndex = Math.ceil(userResponse.length / 2)
                    props.navigation.navigate('BenefitList', {
                      shortTerms: userResponse.slice().splice(0, middleIndex),
                      longTerms: userResponse.slice().splice(-middleIndex)
                    })
                  }}
                />
                <View style={{ marginTop: 8 }} />
                <OutlineButton
                  title="Come back later"
                  onPress={() => props.navigation.navigate('Flow2')}
                />
              </View>
            </View>
          ) : (
            <View
              style={{
                marginTop: 16,
                flexDirection: 'row',
                borderRadius: 100,
                backgroundColor: 'rgba(25, 51, 64, 0.08)',
                paddingHorizontal: 16,
                paddingVertical: 8
              }}>
              <TextInput
                value={text}
                onChangeText={(text) => setText(text)}
                style={{
                  flex: 1,
                  color: Colors.pianoBlack,
                  height: 26,
                  marginRight: 20
                }}
                returnKeyType="send"
                onSubmitEditing={onSendMessage}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 3, top: 6 }}
                onPress={onSendMessage}>
                <Send />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Chat
