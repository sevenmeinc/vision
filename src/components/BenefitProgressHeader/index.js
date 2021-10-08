import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Svg, { Rect, Path } from 'react-native-svg'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FeatherIcons from 'react-native-vector-icons/Feather'
import { Colors } from '../../constants/colors'

const BenefitProgressHeader = ({ current, total, homeScreen, navigation }) => {
  const renderProgress = () => {
    let stage = 0
    const progressArray = []
    while (stage++ < total) {
      progressArray.push(
        <FeatherIcons
          key={stage}
          name={'minus'}
          size={36}
          color={stage === current ? 'black' : Colors.woodsmoke15}
        />
      )
    }
    return progressArray
  }
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#DCDCDD',
        alignItems: 'center'
      }}>
      <View
        style={{
          flexDirection: 'row'
        }}>
        {renderProgress()}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(homeScreen)}>
        <Svg
          width={32}
          height={32}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M24 8L8 24M8 8l16 16"
            stroke="#16161A"
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
