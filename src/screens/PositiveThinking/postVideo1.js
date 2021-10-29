import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import Button from '../../components/Button'

const PostVideo1 = ({
  navigation,
  renderItem,
  positiveThinking1,
  positiveThinking2,
  positiveThinking3
}) => {
  const list = [1, 2, 3]
  let disableNextButton = true
  if (positiveThinking1 || positiveThinking2 || positiveThinking3) {
    disableNextButton = false
  }
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
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View>
              <Logo />
              <Text
                style={{
                  fontFamily: 'semiBold',
                  fontSize: 25,
                  marginVertical: 24,
                  fontWeight: '600'
                }}>
                Share 2-3 negative statements that you tell yourself.
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <FlatList
            keyExtractor={(item, index) => `${index}-${item}`}
            horizontal
            data={list}
            renderItem={renderItem}
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
                disabled={disableNextButton}
                title="Continue"
                background={disableNextButton ? '#9e9ea0' : '#010B02'}
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
