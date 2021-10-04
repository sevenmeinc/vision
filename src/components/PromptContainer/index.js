import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Dimensions, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import FeatherIcons from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get('window')

const PromptContainer = ({ handleNext, handleBack, input }) => {
  const navigation = useNavigation()

  return (
    <View>
      <View
        style={{
          paddingLeft: 32,
          paddingRight: 32,
          flexDirection: 'row',
          alignItems: 'center',
          width: width,
          justifyContent: 'space-between'
        }}>
        {/* carousel goes here */}
        <FeatherIcons name={'activity'} size={32} />
        <TouchableOpacity
          onPress={() => navigation.navigate('SuccessfulHabits01')}>
          <FeatherIcons name="x" size={36} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingTop: 20,
          flex: 1,
          alignItems: 'center',
          height: height / 3
        }}>
        {input()}
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-evenly'
        }}>
        <Button mode={'contained'} onPress={handleBack}>
          back
        </Button>
        <Button mode={'contained'} onPress={handleNext}>
          next
        </Button>
      </View>
    </View>
  )
}

export default PromptContainer
