import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Dimensions, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import FeatherIcons from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get('window')

const PromptContainer = ({ input, route, handleNext }) => {
  const navigation = useNavigation()

  const {
    prompts,
    state: { responses }
  } = route.params

  const handleNextDefault = () => {
    if (prompts?.length === responses + 1) {
      navigation.navigate('PostActivity', { ...route.params })
    } else {
      navigation.navigate('Breathe', {
        ...route.params,
        state: { responses: responses + 1 }
      })
    }
  }

  return (
    <View>
      <View
        style={{
          paddingHorizontal: 32,
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
          padding: 16,
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-evenly'
        }}>
        <Button mode={'contained'} onPress={() => navigation.goBack()}>
          back
        </Button>
        <Button mode={'contained'} onPress={handleNext ?? handleNextDefault}>
          next
        </Button>
      </View>
    </View>
  )
}

export default PromptContainer
