import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import InputCard from '../../components/InputCard'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import Button from '../../components/Button'

const PostVideo1 = (props) => {
  const list = [1, 2, 3]
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

        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1 }}>
              <OutlineButton title="Back" onPress={() => navigation.goBack()} />
            </View>
            <View sytle={{ margin: 10, flex: 1 }} />
            <View style={{ flex: 1 }}>
              <Button
                title="Continue"
                onPress={() => navigation.navigate('postVideo2')}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostVideo1
