import React, { useState } from 'react'
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  ScrollView,
  TextInput,
  SafeAreaView,
  StyleSheet
} from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import useKeyboard from '../../hooks/useKeyboard'

const PostActivity = ({ route }) => {
  const { isKeyboardVisible, onFocus, onBlur } = useKeyboard()
  const navigation = useNavigation()
  const { postActivity } = route.params
  const [res, setRes] = useState('')
  const [resCount, setResCount] = useState(0)

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 16,
      marginBottom: 16,
      borderRadius: 8,
      width: '100%'
    }
  })

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        enabled={isKeyboardVisible}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <ScrollView>
          <Text>Great Job!</Text>
          <Text>
            In light of your reflection, read over your vision and goal, and
            answer the following question.
          </Text>
          <View style={{ ...styles.container, backgroundColor: '#EBEDEE' }}>
            <Text>My Vision</Text>
            <View style={{ ...styles.container, backgroundColor: '#fff' }}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                nisi integer quis vel morbi elementum.
              </Text>
            </View>
          </View>
          <View style={{ ...styles.container, backgroundColor: '#EBEDEE' }}>
            <Text>My goal</Text>
            <View style={{ ...styles.container, backgroundColor: '#fff' }}>
              <Text>Aliquet nisi integer quis vel morbi elementum.</Text>
            </View>
          </View>
          {postActivity.length > resCount ? (
            <View
              style={{
                ...styles.container,
                backgroundColor: '#fff',
                alignItems: 'flex-end'
              }}>
              <Text>{postActivity[resCount]}</Text>
              <TextInput
                style={{
                  ...styles.container,
                  textAlignVertical: 'top'
                }}
                onChangeText={(msg) => {
                  setRes(msg)
                }}
                value={res}
                placeholder={'Start typing...'}
                multiline={true}
                numberOfLines={14}
                onBlur={onBlur}
                onFocus={onFocus}
              />
              <Button
                onPress={() => {
                  setResCount(resCount + 1)
                  setRes('')
                }}>
                SAVE
              </Button>
            </View>
          ) : (
            <Button
              onPress={() => {
                navigation.navigate('End', { ...route.params })
              }}
              mode={'contained'}>
              Finish Activity
            </Button>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default PostActivity
