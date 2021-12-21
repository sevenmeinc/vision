import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import { Colors } from '../../constants/colors'
import ReflectionInput from '../../components/ReflectionInput'
import Button from '../../components/Button'
import useKeyboard from '../../hooks/useKeyboard'

const PostActivity1 = ({ prompts, onNext }) => {
  const navigation = useNavigation()
  const { isKeyboardVisible } = useKeyboard()

  // const [value1, setValue1] = useState('')
  // const [value2, setValue2] = useState('')
  // const [value3, setValue3] = useState('')

  const [values, setValues] = useState(['', '', ''])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.cottonField }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={'position'}
          enabled={isKeyboardVisible}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                paddingLeft: 16,
                paddingRight: 15
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: 'semiBold',
                    fontSize: 36,
                    marginTop: 24,
                    marginBottom: 40
                  }}>
                  One last thing...
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: Colors.felicity,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8
                }}>
                <View
                  style={{
                    alignSelf: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 16
                  }}>
                  <View>
                    <Logo />
                  </View>
                  <Text>Reflection</Text>
                </View>
                {prompts.map((p, i) => {
                  return (
                    <ReflectionInput
                      question={p}
                      value={values[i]}
                      onChangeText={(text) => {
                        const copy = values
                        copy[i] = text
                        setValues(copy)
                      }}
                      disabled={!values[i]}
                    />
                  )
                })}
                {/* <ReflectionInput
                  question="What are some things that you learned from this activity?"
                  value={value1}
                  onChangeText={(text) => setValue1(text)}
                  disabled={!value1}
                />
                <ReflectionInput
                  question="Where could you apply this new knowledge in your daily life?"
                  value={value2}
                  onChangeText={(text) => setValue2(text)}
                  disabled={!value2}
                />
                <ReflectionInput
                  question="What is something you wish to be able to do comfortably a month from now?"
                  value={value3}
                  onChangeText={(text) => setValue3(text)}
                  disabled={!value3}
                /> */}
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  marginTop: 30
                }}>
                <View style={{ flex: 1, marginRight: 10 }}>
                  <OutlineButton
                    title="Back"
                    onPress={() => navigation.goBack()}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Button
                    title="Continue"
                    background={Colors.pianoBlack}
                    color={'white'}
                    onPress={() => navigation.navigate(onNext)}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default PostActivity1
