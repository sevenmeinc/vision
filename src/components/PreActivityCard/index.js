import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
// import Button from '../Button'
import { Button } from 'react-native-paper'
import Space from '../Space'
import colors from '../../../assets/colors'

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
              letterSpacing: -0.01,
              color: colors.squant
            }}>
            {activityType}
          </Text>
          <Button onPress={handleClose} mode={'text'} color={colors.darkCyan}>
            Close
          </Button>
        </View>
        <Image
          resizeMode={'cover'}
          source={image}
          style={{
            height: '80%',
            width: '100%',
            borderWidth: 1,
            borderColor: colors.lightSilver,
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
            <FeatherIcons name="clock" size={20} color={colors.gray2} />
            <Text style={{ color: colors.gray2 }}> {timeEst} min activity</Text>
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
        <Button onPress={btn2.handler} mode={'text'} labelColor={colors.gray2}>
          {btn2.label}
        </Button>
      </View>
    </ScrollView>
  )
}

export default PreActivityCard

PreActivityCard.defaultProps = {
  activityType: 'Reflection Activity',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D0aURGT5WKezruVcRkgc29HptqChXblNxPsZxOn0-mfvQ0fVppxeasbe0x0yxDHvPO8&usqp=CAU',
  title: 'Oh, snap! Guess what I saw?',
  // timeEst: '4:40',
  description:
    "Have you ever met a girl that you tried to date But a year to make love she wanted you to wait Let me tell ya a story of my situation I was talkin' to this girl from the U.S. Nation",
  btn1: {
    label: 'Get started',
    handler: () => {
      console.log('START')
    }
  },
  btn2: {
    label: 'Remind me later',
    handler: () => {
      console.log('LATERS')
    }
  },
  handleClose: () => console.log('handleClose')
}
