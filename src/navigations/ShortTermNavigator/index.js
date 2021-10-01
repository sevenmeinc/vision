import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { modalOptions } from '../utils'
import ShortTermBenefits from '../../screens/BenefitListFlow2/ShortTermBenefits'
import ShortTermBenefitModal from '../../screens/BenefitListFlow2/ShortTermBenefitModal'
import ShortTermHeader from '../../components/ShortTermHeader'
import ShortTermModalHeader from '../../components/ShortTermModalHeader'

const Stack = createStackNavigator()
const ShortTermNavigator = () => {
  const navigation = useNavigation()

  const [shortTermItem1, setShortTermItem1] = useState('')
  const [shortTermItem2, setShortTermItem2] = useState('')
  const [shortTermItem3, setShortTermItem3] = useState('')

  return (
    <Stack.Navigator {...modalOptions}>
      <Stack.Screen
        name="shortTerm"
        options={({ navigation }) => ({
          header: () => <ShortTermHeader navigation={navigation} />
        })}
        children={() => (
          <ShortTermBenefits
            shortTermItem1={shortTermItem1}
            shortTermItem2={shortTermItem2}
            shortTermItem3={shortTermItem3}
          />
        )}
      />
      <Stack.Screen
        name="shortTermModal1"
        options={({ navigation }) => ({
          header: () => <ShortTermModalHeader navigation={navigation} />
        })}
        children={() => (
          <ShortTermBenefitModal
            shortTermItem={shortTermItem1}
            setShortTermItem={setShortTermItem1}
          />
        )}
      />
      <Stack.Screen
        name="shortTermModal2"
        options={({ navigation }) => ({
          header: () => <ShortTermModalHeader navigation={navigation} />
        })}
        children={() => (
          <ShortTermBenefitModal
            shortTermItem={shortTermItem2}
            setShortTermItem={setShortTermItem2}
          />
        )}
      />
      <Stack.Screen
        name="shortTermModal3"
        options={({ navigation }) => ({
          header: () => <ShortTermModalHeader navigation={navigation} />
        })}
        children={() => (
          <ShortTermBenefitModal
            shortTermItem={shortTermItem3}
            setShortTermItem={setShortTermItem3}
          />
        )}
      />
    </Stack.Navigator>
  )
}
export default ShortTermNavigator
