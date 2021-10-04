import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Svg, { Rect, Path } from 'react-native-svg'

const Header = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#DCDCDD',
        alignItems: 'center'
      }}>
      <Svg
        width={156}
        height={2}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <Rect width={36} height={2} rx={1} fill="#16161A" />
        <Rect
          x={40}
          width={36}
          height={2}
          rx={1}
          fill="#16161A"
          fillOpacity={0.15}
        />
        <Rect
          x={80}
          width={36}
          height={2}
          rx={1}
          fill="#16161A"
          fillOpacity={0.15}
        />
        <Rect
          x={120}
          width={36}
          height={2}
          rx={1}
          fill="#16161A"
          fillOpacity={0.15}
        />
      </Svg>
      <TouchableOpacity onPress={() => props.navigation.navigate('Flow 2')}>
        <Svg
          width={32}
          height={32}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <Path
            d="M24 8L8 24M8 8l16 16"
            stroke="#16161A"
            strokeWidth={2.667}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  )
}

export default Header
