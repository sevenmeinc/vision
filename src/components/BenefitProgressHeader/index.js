import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Svg, { Path } from 'react-native-svg'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Colors } from '../../constants/colors'

const BenefitProgressHeader = ({
  current,
  total,
  title,
  navigation,
  darkMode,
  paddingTop = 16
}) => {
  const renderProgress = () => {
    let stage = 0
    const progressArray = []
    while (stage++ < total) {
      progressArray.push(
        <FeatherIcons
          key={stage}
          name={'minus'}
          size={36}
          color={
            stage === current
              ? darkMode
                ? 'white'
                : 'black'
              : darkMode
              ? Colors.ashToAsh
              : Colors.woodsmoke15
          }
        />
      )
    }
    return progressArray
  }

  const renderTitle = () => {
    return (
      <Text
        style={{
          fontSize: 17,
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 20
        }}>
        {title}
      </Text>
    )
  }
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: paddingTop,
        paddingHorizontal: 16,
        backgroundColor: darkMode ? 'black' : '#F9F9F9',
        alignItems: 'center'
      }}>
      <View
        style={{
          flexDirection: 'row'
        }}>
        {title ? renderTitle() : renderProgress()}
      </View>
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Svg
          width={32}
          height={32}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M24 8L8 24M8 8l16 16"
            stroke={darkMode ? 'white' : '#16161A'}
            strokeWidth={2.667}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default BenefitProgressHeader
