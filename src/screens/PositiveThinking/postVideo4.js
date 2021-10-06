import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
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
          <Logo color="white" />
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
        <View style={{ flex: 1 }}>
          <View>
            <Button
              title="Submit"
              color="#16161A"
              background="white"
              onPress={() => navigation.navigate('postVideo5')}
            />
            <View style={{ marginTop: 50 }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostVideo4
