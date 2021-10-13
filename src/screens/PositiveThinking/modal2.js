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
          What is Self-talk?
        </Text>
        <Text
          style={{
            fontSize: 17,
            lineHeight: 24,
            color: '#595959',
            fontWeight: '500',
            margin: 16,
            alignSelf: 'flex-start'
          }}>
          There are many health benefits to positive thinking, including
          decreasing depression and better cardiovascular health.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('positiveThinking3')}
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
          onPress={() => navigation.navigate('positiveThinkingActivity')}>
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
