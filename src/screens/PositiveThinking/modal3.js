import React from 'react'
import { ScrollView, Image, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Modal3 = () => {
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
          source={require('../../../assets/PositiveThinking/modal-banner3.png')}
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
          Practice the Technique
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
          The following technique can help you make the switch from negative to
          positive self-talk. It requires patience and repetition, but will
          become more natural over time with practice..
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('positiveThinking4')}
          style={{
            margin: 16,
            marginTop: 40,
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

export default Modal3
