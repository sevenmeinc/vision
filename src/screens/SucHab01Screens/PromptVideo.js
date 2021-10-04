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

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

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

  const videoOrPreview = () => {
    return (
      <>
        {preview ? (
          <View
            style={{
              width: windowWidth * 0.8,
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'column',
              flex: 0.9
            }}>
            <Image
              source={imgUri}
              style={{
                flex: 1,
                maxWidth: '100%',
                resizeMode: 'contain'
              }}
            />
            <View
              style={{
                ...styles.centered,
                position: 'absolute',
                top: '30%',
                left: '9%',
                padding: 6,
                borderRadius: 50,
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
      </>
    )
  }

  return (
    <View
      style={{
        height: windowHeight,
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <PromptContainer
        prompt={prompt}
        input={videoOrPreview}
        handleNext={() => {
          navigation.navigate('Breathe', {
            ...route.params,
            state: { responses: responses + 1 }
          })
        }}
        handleBack={() =>
          navigation.navigate('PreActivity', { ...route.params })
        }
      />
    </View>
  )
}

export default PromptVideo
