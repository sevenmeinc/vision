import React from 'react'
import { ScrollView, Image, Text, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import DotProgressFooter from '../DotProgressFooter'

const CardOfSeries = ({
  title,
  text,
  img,
  onNext,
  onBack,
  isLast = false,
  current,
  total
}) => {
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
          source={img}
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
          {title}
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
          {text}
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(onNext)}
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
            {isLast ? 'Start activity' : 'Next'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 4,
            justifyContent: 'center'
          }}
          onPress={() => navigation.navigate(onBack)}>
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
      <DotProgressFooter current={current} total={total} />
    </SafeAreaView>
  )
}

export default CardOfSeries
