import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import { Colors } from '../../constants/colors'

const PostVideo2 = (props) => {
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
          <Logo color="white" />
          <Text
            style={{
              fontFamily: 'semiBold',
              fontSize: 25,
              marginVertical: 24,
              color: 'white'
            }}>
            You’re doing great!
          </Text>
          <Text
            style={{
              fontFamily: 'semiBold',
              fontSize: 25,
              marginVertical: 24,
              color: 'white'
            }}>
            Let’s take a second to breathe and gather your thoughts.
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ alignSelf: 'flex-end' }}>
            <OutlineButton
              title="Let's get started"
              onPress={() => navigation.navigate('postVideo3')}
            />
            <View style={{ marginTop: 12 }} />
            <OutlineButton
              title="Comeback later"
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostVideo2
