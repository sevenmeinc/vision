import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import InputCard from '../../components/InputCard'

const PostVideo3 = (props) => {
  const { navigation } = props
  const list = [1, 2, 3]
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
            Change each example into a positive self-talk.
          </Text>
          <FlatList
            keyExtractor={(item, index) => `${index}-${item}`}
            horizontal
            data={list}
            renderItem={InputCard}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ alignSelf: 'flex-end' }}>
            <OutlineButton
              title="Let's get started"
              onPress={() => navigation.navigate('postVideo4')}
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

export default PostVideo3
