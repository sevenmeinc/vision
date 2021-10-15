import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import { Colors } from '../../constants/colors'
import ReflectionInput from '../../components/ReflectionInput'
import Button from '../../components/Button'
const PostVideo5 = (props) => {
  const { navigation } = props
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.cottonField }}>
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

            <ReflectionInput question="What are some things that you learned from this activity?" />
            <ReflectionInput question="Where could you apply this new knowledge in your daily life?" />
            <ReflectionInput question="What is something you wish to be able to do comfortably a month from now?" />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginTop: 30
            }}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <OutlineButton title="Back" onPress={() => navigation.goBack()} />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title="Continue"
                background={Colors.pianoBlack}
                color={'white'}
                onPress={() => navigation.navigate('postVideo6')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PostVideo5
