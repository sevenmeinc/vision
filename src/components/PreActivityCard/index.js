import React from 'react'
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import Space from '../Space'

const { height, width } = Dimensions.get('window')

const PreActivityCard = ({
  image,
  title,
  timeEst, // optional
  description,
  handleBtn1, // fn()
  handleBtn2
}) => {
  const styles = StyleSheet.create({
    descText: {
      fontSize: 17,
      fontStyle: 'normal',
      fontWeight: '500'
    }
  })

  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
        backgroundColor: '#FFF'
      }}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: '#fff'
        }}>
        <Image
          resizeMode={'cover'}
          source={image}
          style={{
            height: height * 0.4,
            width: width - 32,
            borderRadius: 8,
            marginBottom: 24
          }}
        />
        <View
          style={{
            minHeight: 260,
            width: width - 32,
            paddingHorizontal: 16,
            marginBottom: 62
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
          <Text
            style={{
              ...styles.descText,
              color: '#808080',
              lineHeight: 20,
              letterSpacing: 0,
              textAlign: 'left'
            }}>
            <FeatherIcons name="clock" size={20} color={'#808080'} /> {timeEst}{' '}
            min activity
          </Text>
          <Space index={3} />
          <Text
            style={{
              ...styles.descText,
              lineHeight: 24,
              letterSpacing: 0,
              textAlign: 'left'
            }}>
            {description}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleBtn1}
          style={{
            borderRadius: 100,
            width: width - 32,
            height: 52,
            justifyContent: 'center',
            backgroundColor: '#193340'
          }}>
          <Text
            style={{
              ...styles.descText,
              lineHeight: 24,
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
              ...styles.descText,
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
