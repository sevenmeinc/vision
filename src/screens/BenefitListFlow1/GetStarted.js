import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'

const GetStarted = (props) => {
  const { navigation } = props
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 16,
          paddingRight: 15,
          paddingBottom: 10
        }}>
        <View>
          <Logo />
          <Text
            style={{
              fontFamily: 'semiBold',
              fontSize: 25,
              marginVertical: 24
            }}>
            Hey! I'm Seven. I will be guiding you through this activity.
          </Text>

          <Text style={{ fontFamily: 'semiBold', fontSize: 24 }}>
            Ready to get started?
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ alignSelf: 'flex-end' }}>
            <OutlineButton
              title="Let's get started"
              onPress={() => navigation.navigate('Chat')}
            />
            <View style={{ marginTop: 12 }} />
            <OutlineButton
              title="Comeback later"
              onPress={() => navigation.navigate('Flow1')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default GetStarted
