import React from 'react'
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import { Colors } from '../../constants/colors'
import week1 from '../../../assets/PositiveThinking/weeks/week1.png'
import week2 from '../../../assets/PositiveThinking/weeks/week2.png'
import week3 from '../../../assets/PositiveThinking/weeks/week3.png'
import week4 from '../../../assets/PositiveThinking/weeks/week4.png'
import week5 from '../../../assets/PositiveThinking/weeks/week5.png'
import week6 from '../../../assets/PositiveThinking/weeks/week6.png'
import weekEmpty from '../../../assets/PositiveThinking/weeks/weekEmpty.png'

const WeekComponent = ({ weekNumber, image }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        backgroundColor: weekNumber >= 7 ? '#E5E4DF' : 'white',
        borderRadius: 12,
        margin: 3,
        marginBottom: 24
      }}>
      <Image source={image} />
      <Text style={{ marginTop: 8 }}>Week {weekNumber}</Text>
    </View>
  )
}
const PostActivity2 = ({ title, text, onNext }) => {
  const navigation = useNavigation()
  const weeks = [
    week1,
    week2,
    week3,
    week4,
    week5,
    week6,
    weekEmpty,
    weekEmpty,
    weekEmpty,
    weekEmpty,
    weekEmpty,
    weekEmpty
  ]
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.cottonField }}>
      <ScrollView>
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 15
          }}>
          <View>
            <Text
              style={{
                fontFamily: 'semiBold',
                fontSize: 25,
                marginVertical: 24
              }}>
              {title}
            </Text>
            {text.map((t, i) => {
              return (
                <Text
                  key={i}
                  style={{
                    color: Colors.squant,
                    fontSize: 16,
                    marginBottom: 20
                  }}>
                  {t}
                </Text>
              )
            })}
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                marginVertical: 40
              }}>
              {weeks.map((_, i, arr) => {
                return <WeekComponent weekNumber={1 + 1} image={arr[i]} />
              })}
            </View>
          </View>

          <View style={{}}>
            <View>
              <Button
                title="Finish activity"
                color="white"
                background="black"
                onPress={() => navigation.navigate(onNext)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PostActivity2
