import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import { Colors } from '../../constants/colors'

const PostVideo6 = (props) => {
  const { navigation } = props
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.cottonField }}>
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
            Bravo! 👏
          </Text>
          <Text
            style={{ color: Colors.squant, fontSize: 16, marginBottom: 20 }}>
            You’re making great progress!
          </Text>
          <Text style={{ color: Colors.squant, fontSize: 16 }}>
            Remember, building a habit is like working out - keep practicing to
            see the results over time!
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ alignSelf: 'flex-end' }}>
            <View style={{ marginTop: 12 }} />
            <OutlineButton
              title="Finish activity"
              onPress={() => navigation.navigate('positiveThinkingHome')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostVideo6
