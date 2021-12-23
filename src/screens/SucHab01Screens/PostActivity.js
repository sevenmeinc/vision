import React, { useState, useEffect } from 'react'
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import useKeyboard from '../../hooks/useKeyboard'

const PostActivity = ({ postActivity }) => {
  const { onFocus, onBlur } = useKeyboard()
  const navigation = useNavigation()
  const [res, setRes] = useState('')
  const [responses, setResponses] = useState([])
  const [saveDisabled, setSaveDisabled] = useState(true)

  const { description, prompts } = postActivity

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: 12,
      marginHorizontal: 16,
      marginBottom: 16,
      borderRadius: 8
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

  useEffect(() => {
    if (res.length) {
      setSaveDisabled(false)
    } else {
      setSaveDisabled(true)
    }
  }, [res])

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 0,
            paddingBottom: 16,
            justifyContent: 'center'
          }}>
          <Text style={{ ...styles.importedText, color: '#666666' }}>
            {description}
          </Text>
        </View>
        {/* <View style={{ ...styles.container, backgroundColor: '#EBEDEE' }}>
          <Text style={styles.heading}>
            {' '}
            <Image
              source={require('../../../assets/seven-icon.png')}
              style={styles.logo}
            />{' '}
            My Vision
          </Text>
          <View style={{ ...styles.container, backgroundColor: '#fff' }}>
            <Text style={styles.importedText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
              nisi integer quis vel morbi elementum.
            </Text>
          </View>
        </View> */}
        <View style={{ ...styles.container, backgroundColor: '#EBEDEE' }}>
          <Text style={styles.heading}>
            <Image
              source={require('../../../assets/seven-icon.png')}
              style={styles.logo}
            />{' '}
            My goal
          </Text>
          <View style={{ ...styles.container, backgroundColor: '#fff' }}>
            <Text style={styles.importedText}>
              {/* Aliquet nisi integer quis vel morbi elementum. */}
              Please refer back to the goal you set earlier in this study.
            </Text>
          </View>
        </View>
        <View
          style={{
            ...styles.container,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#E5E5E5',
            shadowColor: '#000000',
            shadowOpacity: 0.4,
            shadowRadius: 8,
            shadowOffset: { height: 4 },
            marginBottom: 48,
            minHeight: 320
          }}>
          <Text style={styles.importedText}>
            {prompts.length > responses.length
              ? prompts[responses.length]
              : prompts[prompts.length - 1]}
          </Text>
          <TextInput
            style={{
              textAlignVertical: 'top',
              minHeight: 200,
              marginTop: 16
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
            <TouchableOpacity
              disabled={saveDisabled}
              style={{
                opacity:
                  saveDisabled || prompts.length === responses.length
                    ? 0.4
                    : null
              }}
              onPress={() => {
                if (prompts.length > responses.length) {
                  setResponses([...responses, res])
                  setSaveDisabled(true)
                  return
                } else {
                  setRes('')
                }
              }}>
              <Text
                style={{
                  color: '#00968A',
                  fontSize: 17,
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 20,
                  letterSpacing: -0.01,
                  textAlign: 'right'
                }}>
                SAVE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            disabled={prompts.length > responses.length}
            onPress={() => navigation.navigate('Flows')}
            style={{
              ...styles.button,
              backgroundColor: '#193340',
              opacity: prompts.length > responses.length ? 0.4 : null
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default PostActivity
