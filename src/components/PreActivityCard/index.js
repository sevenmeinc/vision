import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Button } from 'react-native-paper'
import Space from '../Space'

const { height, width } = Dimensions.get('window')

const PreActivityCard = ({
  handleClose,
  activityType,
  image,
  title,
  timeEst, // optional
  description,
  btn1, // {handler: fn(), label: string}
  btn2 // {handler: fn(), label: string}
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
          padding: 16,
          height: '50%',
          width: '100%',
          justifyContent: 'flex-start'
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Text
            style={{
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 14,
              lineHeight: 17,
              letterSpacing: -0.01,
              color: '#666666'
            }}>
            {activityType}
          </Text>
          <Button onPress={handleClose} mode={'text'}>
            Close
          </Button>
        </View>
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
          height: '35%',
          padding: 16,
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
              alignItems: 'center'
            }}>
            <FeatherIcons name="clock" size={20} />
            <Text> {timeEst} min activity</Text>
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
        <Button onPress={btn1.handler} mode={'contained'} dark={true}>
          {btn1.label}
        </Button>
        <Button onPress={btn2.handler} mode={'text'}>
          {btn2.label}
        </Button>
      </View>
    </View>
  )
}

export default PreActivityCard
