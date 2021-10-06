import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import Button from '../Button'
import Title from '../Title'
import Space from '../Space'
import colors from '../../assets/colors'

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
      sx={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <View
        sx={{
          padding: 16,
          height: '100%',
          justifyContent: 'flex-start'
        }}>
        <View
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <Text
            sx={{
              fontFamily: 'SF Pro Text',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 14,
              lineHeight: 17,
              letterSpacing: -0.01,
              color: colors.squant
            }}>
            {activityType}
          </Text>
          <Button
            onPress={handleClose}
            label={'Close'}
            variant={'text'}
            labelColor={colors.darkCyan}
          />
        </View>
        <Image
          resizeMode={'cover'}
          source={{ uri: image }}
          sx={{
            height: '80%',
            width: '100%',
            borderWidth: 1,
            borderColor: colors.lightSilver,
            borderRadius: 8
          }}
        />
      </View>
      <View sx={{ minHeight: '35%', padding: 16 }}>
        <Title
          title={title}
          sx={{
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '32px',
            lineHeight: '38px'
          }}
        />
        {timeEst ? (
          <View
            sx={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <FeatherIcons name="clock" size={20} color={colors.gray2} />
            <Text sx={{ color: colors.gray2 }}> {timeEst} min activity</Text>
          </View>
        ) : (
          <Space index={3} />
        )}
        <Text
          sx={{
            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 24
          }}>
          {description}
        </Text>
      </View>
      {}
      <View>
        <Button
          onPress={btn1.handler}
          label={btn1.label}
          variant={'contained'}
        />
        <Button
          onPress={btn2.handler}
          label={btn2.label}
          variant={'text'}
          labelColor={colors.gray2}
        />
      </View>
    </ScrollView>
  )
}

export default PreActivityCard
