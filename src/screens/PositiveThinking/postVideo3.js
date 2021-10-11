import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import Button from '../../components/Button'
import InputAudioCard from '../../components/InputAudioCard'

const PostVideo3 = ({
  navigation,
  positiveThinking1,
  positiveThinking2,
  positiveThinking3
}) => {
  const list = [positiveThinking1, positiveThinking2, positiveThinking3]
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 16,
          paddingRight: 15,
          marginTop: 20
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
            renderItem={({ item, index }) => {
              return (
                <InputAudioCard
                  index={index}
                  item={item}
                  positiveThinking1={positiveThinking1}
                  positiveThinking2={positiveThinking2}
                  positiveThinking3={positiveThinking3}
                />
              )
            }}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <OutlineButton title="Back" onPress={() => navigation.goBack()} />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                title="Continue"
                color="white"
                background="#9e9e9f"
                onPress={() => navigation.navigate('postVideo4')}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostVideo3
