import React, { useState } from 'react'
import { ScrollView, Image, Text, SafeAreaView, View } from 'react-native'
import Svg, { Rect, Path, Circle, G } from 'react-native-svg'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const ShortTermBenefits = ({ shortTermItem, setShortTermItem }) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <TextInput
        placeholder="One benefit would be..."
        value={shortTermItem}
        onChangeText={(text) => setShortTermItem(text)}
        multiline={true}
        style={{ textAlignVertical: 'top' }}
      />
    </SafeAreaView>
  )
}

export default ShortTermBenefits
