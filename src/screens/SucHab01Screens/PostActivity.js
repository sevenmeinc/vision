import React, { useState } from 'react'
import { View, Image, Text, TextInput, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button, Title } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import useKeyboard from '../../hooks/useKeyboard'

const PostActivity = ({ route }) => {
  const { onFocus, onBlur } = useKeyboard()
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
    },
    heading: {
      fontSize: 17,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 20,
      letterSpacing: -0.03,
      textAlign: 'left',
      marginBottom: 16
    },
    importedText: {
      fontSize: 17,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 21,
      letterSpacing: 0,
      textAlign: 'left'
    },
    logo: { width: 20, height: 20 }
  })

  return (
    <KeyboardAwareScrollView>
      <View style={{ paddingHorizontal: 16, paddingTop: 0, paddingBottom: 16 }}>
        <Title
          styles={{
            fontSize: 36,
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 40,
            letterSpacing: -0.03,
            textAlign: 'left'
          }}>
          Well Done!
        </Title>
        <Text style={{ ...styles.importedText, color: '#666666' }}>
          Take a moment to look back at your vision and goal. Respond to the
          question below to start thinking about ways to apply your learnings!
        </Text>
      </View>
      <View style={{ ...styles.container, backgroundColor: '#EBEDEE' }}>
        <Text style={styles.heading}>
          {' '}
          <Image
            source={require('../../../assets/seven-icon.png')}
            style={styles.logo}
          />
          My Vision
        </Text>
        <View style={{ ...styles.container, backgroundColor: '#fff' }}>
          <Text style={styles.importedText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
            nisi integer quis vel morbi elementum.
          </Text>
        </View>
      </View>
      <View style={{ ...styles.container, backgroundColor: '#EBEDEE' }}>
        <Text style={styles.heading}>
          <Image
            source={require('../../../assets/seven-icon.png')}
            style={styles.logo}
          />
          My goal
        </Text>
        <View style={{ ...styles.container, backgroundColor: '#fff' }}>
          <Text style={styles.importedText}>
            Aliquet nisi integer quis vel morbi elementum.
          </Text>
        </View>
      </View>
      {postActivity.length > resCount ? (
        <View
          style={{
            ...styles.container,
            backgroundColor: '#fff'
          }}>
          <Text style={styles.importedText}>{postActivity[resCount]}</Text>
          <TextInput
            style={{
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
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end'
            }}>
            <Button
              onPress={() => {
                setResCount(resCount + 1)
                setRes('')
              }}>
              SAVE
            </Button>
          </View>
        </View>
      ) : (
        <Button
          onPress={() => {
            navigation.navigate('Flows')
          }}
          mode={'contained'}>
          Finish Activity
        </Button>
      )}
    </KeyboardAwareScrollView>
  )
}

export default PostActivity
