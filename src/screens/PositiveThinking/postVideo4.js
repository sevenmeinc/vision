import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import { Colors } from '../../constants/colors'

const PostVideo4 = (props) => {
  const { navigation } = props
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.blueWhale }}>
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
              marginVertical: 24,
              color: 'white'
            }}>
            Great job!
          </Text>
          <Text
            style={{
              fontFamily: 'semiBold',
              fontSize: 25,
              marginVertical: 24,
              color: 'white'
            }}>
            Submit your response and feel free to leave any thoughts you might
            have to go over in our next session!
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ alignSelf: 'flex-end' }}>
            <OutlineButton
              title="Let's get started"
              onPress={() => navigation.navigate('postVideo5')}
            />
            <View style={{ marginTop: 12 }} />
            <OutlineButton
              title="Comeback later"
              onPress={() => navigation.navigate('positiveThinkingHome')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostVideo4
