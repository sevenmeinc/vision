import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Button } from 'react-native-paper'
import Space from '../Space'
import { Colors } from '../../constants/colors'

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
    <View
      style={{
        display: 'flex',
        flexGrow: 1,
        padding: 16,
        maxHeight: height,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
      <View
        style={{
          height: '40%',
          width: '100%',
          justifyContent: 'flex-start'
        }}>
        <Image
          resizeMode={'cover'}
          source={image}
          style={{
            height: '80%',
            width: '100%',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: 'lightgray'
          }}
        />
      </View>
      <View
        style={{
          height: '45%',
          paddingHorizontal: 16,
          width: '100%'
        }}>
        <Text
          style={{
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 32,
            lineHeight: 38
          }}>
          {title}
        </Text>
        {timeEst ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 4
            }}>
            <FeatherIcons
              name="clock"
              size={20}
              color={Colors.shadyCharacter}
            />
            <Text style={{ color: Colors.shadyCharacter }}>
              {' '}
              {timeEst} min activity
            </Text>
          </View>
        ) : (
          <Space index={3} />
        )}
        <Text
          style={{
            fontStyle: 'normal',
            fontSize: 17,
            lineHeight: 24
          }}>
          {description}
        </Text>
      </View>
      <View>
        <Button onPress={handleBtn1} mode={'contained'} dark={true}>
          Get Started
        </Button>
        <Button onPress={handleBtn2} mode={'text'}>
          Remind me later
        </Button>
      </View>
      <Space index={8} />
    </View>
  )
}

export default PreActivityCard
