import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'

const PostVideo1 = (props) => {
  const { navigation } = props
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 16,
          paddingRight: 15
        }}>
        <View>
          <Logo />
          <Text
            style={{
              fontFamily: 'semiBold',
              fontSize: 25,
              marginVertical: 24
            }}>
            Share 2-3 examples of negative self-talk that you tell yourself.
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

export default PostVideo1
