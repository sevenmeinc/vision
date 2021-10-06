import React, { useState } from 'react'
import {
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FeatherIcons from 'react-native-vector-icons/Feather'
import PromptContainer from '../../components/PromptContainer'
import VideoRec from '../../components/VideoRec'
import Space from '../../components/Space'

const { width, height } = Dimensions.get('window')

const PromptVideo = ({ route }) => {
  const navigation = useNavigation()
  const {
    prompts,
    state: { responses }
  } = route.params
  const prompt = prompts[responses]
  const newTimer = { min: 0, sec: 0 }

  const [imgUri, setImgUri] = useState(null)
  const [preview, setPreview] = useState(false)
  const [duration, setDuration] = useState(newTimer)
  const [time, setTime] = useState(newTimer)

  const handleAudio = () => {
    navigation.navigate('PromptAudio', { ...route.params })
  }
  const handleText = () => {
    navigation.navigate('PromptText', {
      ...route.params
    })
  }

  const styles = StyleSheet.create({
    centered: { alignItems: 'center', justifyContent: 'center' },
    buttonContainer: {
      flex: 0.4,
      width: '66%',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 20
    }
  })

  const PreviewScreen = () => {
    return (
      <View style={{ ...styles.centered, paddingHorizontal: 16 }}>
        <Text
          style={{
            fontSize: 17,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 20,
            letterSpacing: -0.01,
            textAlign: 'center'
          }}>
          {prompt.prompt}
        </Text>
        <View
          style={{
            ...styles.centered,
            width: width * 0.75,
            height: height * 0.5,
            flexDirection: 'column'
          }}>
          <Space index={16} />
          <Space index={16} />
          <View>
            <Image
              source={imgUri}
              style={{
                flex: 1,
                height: height * 0.3,
                maxWidth: '100%',
                resizeMode: 'cover',
                borderRadius: 20
              }}
            />
            <View
              style={{
                ...styles.centered,
                height: height * 0.5,
                width: width * 0.75,
                position: 'absolute',
                padding: 6,
                borderRadius: 20,
                backgroundColor: '#16161A',
                opacity: 0.6
              }}>
              <Text style={{ color: 'white' }}>
                {time.min < 10 ? `0${time.min}` : time.min}:
                {time.sec < 10 ? `0${time.sec}` : time.sec} /{' '}
                {duration.min < 10 ? `0${duration.min}` : duration.min}:
                {duration.sec < 10 ? `0${duration.sec}` : duration.sec}
              </Text>
              <View style={styles.buttonContainer}>
                {/* btn1: delete */}
                <TouchableOpacity
                  onPress={() => {
                    setPreview(false)
                  }}>
                  <FeatherIcons name={'trash-2'} size={32} color={'white'} />
                </TouchableOpacity>
                {/* btn2: play */}
                <TouchableOpacity
                  onPress={() => {
                    alert('Replay not available in prototype')
                  }}
                  style={{
                    ...styles.centered,
                    width: 80,
                    height: 80,
                    borderRadius: 50
                  }}>
                  <FeatherIcons name={'play'} size={50} color={'white'} />
                </TouchableOpacity>
                {/* btn3: restart */}
                <TouchableOpacity
                  onPress={() => {
                    alert('Feature not available in prototype')
                  }}>
                  <FeatherIcons name={'rotate-ccw'} size={32} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View
      style={{
        ...styles.centered,
        height: height,
        width: width,
        flex: 1
      }}>
      {preview ? (
        <View styles={{ flex: 0.8 }}>
          <PromptContainer input={PreviewScreen} route={route} />
        </View>
      ) : (
        <VideoRec
          route={route}
          handleAudio={handleAudio}
          handleText={handleText}
          setImgUri={setImgUri}
          setPreview={setPreview}
          setDuration={setDuration}
          time={time}
          setTime={setTime}
        />
      )}
    </View>
  )
}

export default PromptVideo