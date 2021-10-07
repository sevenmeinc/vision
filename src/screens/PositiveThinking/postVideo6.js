import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import Button from '../../components/Button'
import { Colors } from '../../constants/colors'

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
const PostVideo6 = (props) => {
  const { navigation } = props
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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
            Bravo! 👏
          </Text>
          <Text
            style={{ color: Colors.squant, fontSize: 16, marginBottom: 20 }}>
            You’re making great progress!
          </Text>
          <Text style={{ color: Colors.squant, fontSize: 16 }}>
            Remember, building a habit is like working out - keep practicing to
            see the results over time!
          </Text>
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginVertical: 40
            }}>
            <WeekComponent
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
            />
          </View>
        </View>

        <View style={{}}>
          <View>
            <Button
              title="Finish activity"
              color="white"
              background="black"
              onPress={() => navigation.navigate('positiveThinkingHome')}
            />
            <View style={{ marginTop: 50 }} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostVideo6
