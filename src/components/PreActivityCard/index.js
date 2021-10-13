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

const { height } = Dimensions.get('window')

const PreActivityCard = ({
  image,
  title,
  timeEst, // optional
  description,
  handleBtn1, // fn()
  handleBtn2
}) => {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        flexGrow: 1,
        marginHorizontal: 16,
        marginTop: 16,
        backgroundColor: '#FFF',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <ScrollView>
        <View
          style={{
            height: height * 0.4,
            width: '100%',
            justifyContent: 'flex-start'
          }}>
          <Image
            resizeMode={'cover'}
            source={image}
            style={{
              height: '90%',
              width: '100%',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: 'lightgray'
            }}
          />
        </View>
        <View
          style={{
            minHeight: height * 0.2,
            width: '100%',
            paddingHorizontal: 16,
            marginBottom: 20
          }}>
          <Text
            style={{
              fontSize: 32,
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 38,
              letterSpacing: 0,
              textAlign: 'left',
              marginBottom: 8
            }}>
            {title}
          </Text>
          {timeEst ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 24
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
              textAlign: 'left'
            }}>
            {description}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            onPress={handleBtn1}
            style={{
              borderRadius: 100,
              width: '80%',
              height: 52,
              justifyContent: 'center',
              backgroundColor: '#193340'
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
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PreActivityCard
