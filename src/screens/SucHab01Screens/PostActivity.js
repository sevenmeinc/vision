import React, { useState } from 'react'
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Title } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import useKeyboard from '../../hooks/useKeyboard'

const PostActivity = ({ postActivity }) => {
  const { onFocus, onBlur } = useKeyboard()
  const navigation = useNavigation()
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
    logo: { width: 20, height: 20 },
    button: {
      marginRight: 4,
      borderRadius: 100,
      width: '80%',
      height: 52,
      justifyContent: 'center'
    }
  })

  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          paddingHorizontal: 16,
          paddingTop: 0,
          paddingBottom: 16,
          justifyContent: 'center'
        }}>
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
            <Text
              onPress={() => {
                setResCount(resCount + 1)
                setRes('')
              }}>
              SAVE
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Flows')}
            style={{
              ...styles.button,
              backgroundColor: '#193340'
            }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
                textAlign: 'center',
                color: '#fff'
              }}>
              Finish Activity
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </KeyboardAwareScrollView>
  )
}

export default PostActivity
