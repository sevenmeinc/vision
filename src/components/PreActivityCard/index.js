import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import Space from '../Space'

const { width } = Dimensions.get('window')

const PreActivityCard = ({
  image,
  title,
  timeEst, // optional
  description,
  handleBtn1, // fn()
  handleBtn2
}) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: '#fff'
        }}>
        <Image
          source={image}
          style={{
            marginTop: 8,
            width: width - 30,
            height: 258,
            borderRadius: 12
          }}
          resizeMode={'cover'}
        />
        <Text
          style={{
            fontSize: 32,
            fontStyle: 'normal',
            fontWeight: '700',
            lineHeight: 38,
            letterSpacing: 0,
            textAlign: 'left',
            marginVertical: 8
          }}>
          {title}
        </Text>
        {timeEst ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 24,
              alignSelf: 'flex-start',
              paddingHorizontal: 16
            }}>
            <FeatherIcons name="clock" size={20} color={'#808080'} />
            <Text
              style={{
                color: '#808080',
                fontSize: 17,
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 20,
                letterSpacing: 0,
                textAlign: 'left'
              }}>
              {' '}
              {timeEst} min activity
            </Text>
          </View>
        ) : (
          <Space index={3} />
        )}
        <Text
          style={{
            fontSize: 17,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 24,
            letterSpacing: 0,
            textAlign: 'left',
            paddingHorizontal: 16
          }}>
          {description}
        </Text>

        <TouchableOpacity
          onPress={handleBtn1}
          style={{
            borderRadius: 100,
            width: width - 30,
            height: 52,
            justifyContent: 'center',
            backgroundColor: '#193340',
            marginTop: 62
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              textAlign: 'center',
              color: '#fff'
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleBtn2}
          style={{
            borderRadius: 100,
            justifyContent: 'center',
            marginTop: 20
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              textAlign: 'center',
              color: '#808080'
            }}>
            Remind me later
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PreActivityCard
