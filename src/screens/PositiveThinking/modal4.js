import React from 'react'
import { ScrollView, Image, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Modal4 = () => {
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
          source={require('../../../assets/PositiveThinking/modal-banner4.png')}
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
          Examples of self-talk
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
          style={{
            margin: 16,
            marginTop: 40,
            borderRadius: 100,
            width: 344,
            height: 52,
            backgroundColor: '#193340',
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate('video')}>
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
          onPress={() => navigation.navigate('video')}>
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

export default Modal4
