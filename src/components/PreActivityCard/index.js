import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Button } from 'react-native-paper'
import Space from '../Space'

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
    <ScrollView
      style={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column'
      }}
      contentContainerStyle={{
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <View
        style={{
          padding: 16,
          height: '100%',
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
              letterSpacing: -0.01
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
            borderRadius: 8
          }}
        />
      </View>
      <View style={{ minHeight: '35%', padding: 16, width: '100%' }}>
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
    </ScrollView>
  )
}

export default PreActivityCard
