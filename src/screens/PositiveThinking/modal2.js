import React from 'react'
import { ScrollView, Image, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Modal2 = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        height: '100%'
      }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Image
          source={require('../../../assets/PositiveThinking/modal-banner2.png')}
          style={{
            margin: 16
          }}
        />
        <Text
          style={{
            fontSize: 24,
            lineHeight: 29,
            color: '#16161A',
            fontWeight: '700',
            alignSelf: 'flex-start',
            margin: 16
          }}>
          Observe your self-talk
        </Text>
        <Text
          style={{
            fontSize: 17,
            lineHeight: 24,
            color: '#666666',
            fontWeight: '400',
            margin: 16,
            alignSelf: 'flex-start'
          }}>
          One way to get started with positive thinking is by observing your
          self-talk — the inner discussion you have with yourself. Negative
          self-talk can make you doubt your abilities and lower your
          self-esteem, while positive self-talk can enhance your general
          wellbeing.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('positiveThinking3')}
          style={{
            margin: 16,
            borderRadius: 100,
            width: 344,
            height: 52,
            backgroundColor: '#193340',
            justifyContent: 'center'
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#fff',
              fontWeight: '500',
              textAlign: 'center'
            }}>
            Next
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 4,
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('positiveThinkingHome')}>
          <Text
            style={{
              fontSize: 14,
              color: '#808080',
              fontWeight: '500',
              textAlign: 'center',
              lineHeight: 16
            }}>
            Skip
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Modal2
