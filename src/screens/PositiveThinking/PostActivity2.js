import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
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
            {/* Bravo! 👏 */}
            {title}
          </Text>
          {/* <Text
            style={{ color: Colors.squant, fontSize: 16, marginBottom: 20 }}>
            You’re making great progress!
          </Text>
          <Text style={{ color: Colors.squant, fontSize: 16 }}>
            Remember, building a habit is like working out - keep practicing to
            see the results over time!
          </Text> */}
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
            {/* <WeekComponent
              weekNumber={1}
              image={require('../../../assets/PositiveThinking/weeks/week1.png')}
            />
            <WeekComponent
              weekNumber={2}
              image={require('../../../assets/PositiveThinking/weeks/week2.png')}
            />
            <WeekComponent
              weekNumber={3}
              image={require('../../../assets/PositiveThinking/weeks/week3.png')}
            />
            <WeekComponent
              weekNumber={4}
              image={require('../../../assets/PositiveThinking/weeks/week4.png')}
            />
            <WeekComponent
              weekNumber={5}
              image={require('../../../assets/PositiveThinking/weeks/week5.png')}
            />
            <WeekComponent
              weekNumber={6}
              image={require('../../../assets/PositiveThinking/weeks/week6.png')}
            />
            <WeekComponent
              weekNumber={7}
              image={require('../../../assets/PositiveThinking/weeks/weekEmpty.png')}
            />
            <WeekComponent
              weekNumber={8}
              image={require('../../../assets/PositiveThinking/weeks/weekEmpty.png')}
            />
            <WeekComponent
              weekNumber={9}
              image={require('../../../assets/PositiveThinking/weeks/weekEmpty.png')}
            />
            <WeekComponent
              weekNumber={10}
              image={require('../../../assets/PositiveThinking/weeks/weekEmpty.png')}
            />
            <WeekComponent
              weekNumber={11}
              image={require('../../../assets/PositiveThinking/weeks/weekEmpty.png')}
            />
            <WeekComponent
              weekNumber={12}
              image={require('../../../assets/PositiveThinking/weeks/weekEmpty.png')}
            /> */}
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
    </SafeAreaView>
  )
}

export default PostActivity2
