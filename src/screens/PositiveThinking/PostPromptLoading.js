import { Ionicons } from '@expo/vector-icons'
import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../components/Logo'
import { Colors } from '../../constants/colors'

const PostPromptLoading = ({ onNext, text }) => {
  const [progress, setProgress] = useState(0)
  const navigation = useNavigation()

  useEffect(() => {
    let timer = setTimeout(() => {
      setProgress(progress + 0.1)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  })

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
        <Logo fill="white" />
        <View>
          {text.map((t, i) => {
            return (
              <Text
                key={i}
                style={{
                  fontFamily: 'semiBold',
                  fontSize: 36,
                  marginVertical: 24,
                  color: 'white'
                }}>
                {t}
              </Text>
            )
          })}
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
                onPress={() => navigation.navigate(onNext)}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostPromptLoading
