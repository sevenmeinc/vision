import React, { useState } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'
import InputAudioCard from '../../components/InputAudioCard'
import Logo from '../../components/Logo'
import OutlineButton from '../../components/OutlineButton'
import Button from '../../components/Button'

const PositiveThinkingReframe = ({
  text,
  onNext,
  positiveThinking1,
  positiveThinking2,
  positiveThinking3,
  previews,
  setPreviews
}) => {
  const navigation = useNavigation()

  const [textValue, setTextValue] = useState({ 0: '', 1: '', 2: '' })

  const list = [positiveThinking1, positiveThinking2, positiveThinking3]

  let disableNextButton = true
  if (
    (previews[0] || textValue[0]) &&
    (previews[1] || textValue[1]) &&
    (previews[2] || textValue[2])
  ) {
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
              {text.map((t, i) => {
                return (
                  <Text
                    key={i}
                    style={{
                      fontFamily: 'semiBold',
                      fontSize: 25,
                      marginVertical: 24,
                      fontWeight: '600'
                    }}>
                    {t}
                  </Text>
                )
              })}
            </View>
          </TouchableWithoutFeedback>
          <FlatList
            keyExtractor={(item, index) => `${index}-${item}`}
            horizontal
            data={list}
            renderItem={({ item, index }) => {
              return (
                <InputAudioCard
                  index={index}
                  item={item}
                  positiveThinking1={positiveThinking1}
                  positiveThinking2={positiveThinking2}
                  positiveThinking3={positiveThinking3}
                  savedRecording={
                    typeof previews[index] === 'boolean'
                      ? previews[index]
                      : null
                  }
                  setSavedRecording={() => {
                    const copy = { ...previews, [index]: true }
                    setPreviews(copy)
                  }}
                  videoScreen={[
                    'videoPrompt',
                    {
                      prompt: list[index],
                      audioScreen: 'postVideo3',
                      textScreen: 'postVideo3',
                      previewScreen: 'postVideo3',
                      setImgUri: (uri) => {
                        const copy = { ...previews, [index]: uri }
                        setPreviews(copy)
                      }
                    }
                  ]}
                  imageUri={
                    typeof previews[index] === 'object' ? previews[index] : null
                  }
                  textValue={textValue[index]}
                  setTextValue={(text) => {
                    setTextValue({ ...textValue, [index]: text })
                  }}
                />
              )
            }}
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
                background={disableNextButton ? '#9e9ea0' : Colors.pianoBlack}
                onPress={() => navigation.navigate(onNext)}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PositiveThinkingReframe
