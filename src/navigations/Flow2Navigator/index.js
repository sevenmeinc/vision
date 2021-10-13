import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import Flow2 from '../../screens/BenefitListFlow2/Flow2'
import ReflectionHome from '../../screens/ReflectionHome'
import Header from '../../components/Header'
import ShortTermBenefits from '../../screens/BenefitListFlow2/ShortTermBenefits'
import LongTermBenefits from '../../screens/BenefitListFlow2/LongTermBenefits'
import ShortTermBenefitModal from '../../screens/BenefitListFlow2/ShortTermBenefitModal'
import LongTermBenefitModal from '../../screens/BenefitListFlow2/LongTermBenefitModal'
import BenefitProgressHeader from '../../components/BenefitProgressHeader'
import ShortTermModalHeader from '../../components/ShortTermModalHeader'
import LongTermModalHeader from '../../components/LongTermModalHeader'
import BreatheScreen from '../../screens/SucHab01Screens/Breathe'
import FeedbackScreen from '../../screens/BenefitListFlow2/Feedback'
import ReviewBenefitList from '../../screens/BenefitListFlow2/ReviewBenefitList'

const Stack = createStackNavigator()
const Flow2Navigator = () => {
  const navigation = useNavigation()
  const [shortTermItem1, setShortTermItem1] = useState('')
  const [shortTermItem2, setShortTermItem2] = useState('')
  const [shortTermItem3, setShortTermItem3] = useState('')

  const [longTermItem1, setLongTermItem1] = useState('')
  const [longTermItem2, setLongTermItem2] = useState('')
  const [longTermItem3, setLongTermItem3] = useState('')

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Flow 2"
        component={Flow2}
        options={{
          headerTitle: 'Chat'
        }}
      />
      <Stack.Screen
        name="reflectionHome"
        options={({ navigation }) => ({
          header: () => (
            <Header navigation={navigation} title="Reflection activity" />
          ),
          presentation: 'modal'
        })}
        children={(props) => (
          <ReflectionHome
            {...props}
            onPress={() => navigation.navigate('shortTermScreen')}
          />
        )}
      />
      <Stack.Screen
        name="shortTermScreen"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={1}
              total={4}
              navigation={navigation}
            />
          )
        })}
        children={() => (
          <ShortTermBenefits
            shortTermItem1={shortTermItem1}
            shortTermItem2={shortTermItem2}
            shortTermItem3={shortTermItem3}
            nextScreen={'Breathe'}
          />
        )}
      />
      <Stack.Screen
        name="shortTermModal1"
        options={({ navigation }) => ({
          header: () => <ShortTermModalHeader navigation={navigation} />,
          presentation: 'modal'
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
          header: () => <ShortTermModalHeader navigation={navigation} />,
          presentation: 'modal'
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
          header: () => <ShortTermModalHeader navigation={navigation} />,
          presentation: 'modal'
        })}
        children={() => (
          <ShortTermBenefitModal
            shortTermItem={shortTermItem3}
            setShortTermItem={setShortTermItem3}
          />
        )}
      />
      <Stack.Screen
        name="Breathe"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={2}
              total={4}
              navigation={navigation}
            />
          )
        })}
        children={(props) => (
          <BreatheScreen
            {...props}
            prompt={'Breathing space'}
            nextScreen={'longTerm'}
          />
        )}
      />
      <Stack.Screen
        name="longTerm"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={3}
              total={4}
              navigation={navigation}
            />
          )
        })}
        children={() => (
          <LongTermBenefits
            longTermItem1={longTermItem1}
            longTermItem2={longTermItem2}
            longTermItem3={longTermItem3}
            nextScreen={'reviewBenefitList'}
          />
        )}
      />
      <Stack.Screen
        name="longTermModal1"
        options={({ navigation }) => ({
          header: () => <LongTermModalHeader navigation={navigation} />,
          presentation: 'modal'
        })}
        children={() => (
          <LongTermBenefitModal
            longTermItem={longTermItem1}
            setLongTermItem={setLongTermItem1}
          />
        )}
      />
      <Stack.Screen
        name="longTermModal2"
        options={({ navigation }) => ({
          header: () => <LongTermModalHeader navigation={navigation} />,
          presentation: 'modal'
        })}
        children={() => (
          <LongTermBenefitModal
            longTermItem={longTermItem2}
            setLongTermItem={setLongTermItem2}
          />
        )}
      />
      <Stack.Screen
        name="longTermModal3"
        options={({ navigation }) => ({
          header: () => <LongTermModalHeader navigation={navigation} />,
          presentation: 'modal'
        })}
        children={() => (
          <LongTermBenefitModal
            longTermItem={longTermItem3}
            setLongTermItem={setLongTermItem3}
          />
        )}
      />
      <Stack.Screen
        name="reviewBenefitList"
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              current={4}
              total={4}
              navigation={navigation}
            />
          )
        })}
        children={() => (
          <ReviewBenefitList
            shortTerms={[shortTermItem1, shortTermItem2, shortTermItem3]}
            longTerms={[longTermItem1, longTermItem2, longTermItem3]}
            nextScreen={'Feedback'}
          />
        )}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={({ navigation }) => ({
          header: () => (
            <BenefitProgressHeader
              title={'Benefits List'}
              navigation={navigation}
            />
          )
        })}
      />
    </Stack.Navigator>
  )
}
export default Flow2Navigator
