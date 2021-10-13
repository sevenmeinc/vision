import React from 'react'
import { SafeAreaView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const ShortTermBenefitModal = ({ shortTermItem, setShortTermItem }) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <TextInput
        placeholder="One benefit would be..."
        value={shortTermItem}
        onChangeText={(text) => setShortTermItem(text)}
        multiline={true}
        style={{ textAlignVertical: 'top', padding: 16 }}
        autoFocus={true}
      />
    </SafeAreaView>
  )
}

export default ShortTermBenefitModal
