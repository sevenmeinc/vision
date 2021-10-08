import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import * as Progress from 'react-native-progress'
import Logo from '../../components/Logo'
import { Colors } from '../../constants/colors'

const PostVideo2 = (props) => {
  const [progress, setProgress] = useState(0)
  const { navigation } = props

  setTimeout(() => {
    setProgress(progress + 0.1)
  }, 1000)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.blueWhale
      }}>
      <View
        style={{
          flex: 1,
          paddingLeft: 16,
          paddingRight: 15,
          marginTop: 20
        }}>
        <View>
          <Logo fill="white" />
          <Text
            style={{
              fontFamily: 'semiBold',
              fontSize: 36,
              marginVertical: 24,
              color: 'white'
            }}>
            You’re doing great!
          </Text>
          <Text
            style={{
              fontFamily: 'semiBold',
              fontSize: 36,
              marginVertical: 24,
              color: 'white'
            }}>
            Let’s take a second to breathe and gather your thoughts.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: 40
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <View style={{ marginRight: 13 }}>
              <Progress.Bar
                progress={progress}
                color="white"
                width={300}
                height={4}
              />
            </View>
            <View>
              <Ionicons
                name="play-skip-forward"
                color="white"
                size={24}
                onPress={() => navigation.navigate('postVideo3')}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostVideo2
