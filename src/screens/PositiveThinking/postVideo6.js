import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import { Colors } from '../../constants/colors'

const WeekComponent = ({ weekNumber }) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 80,
        backgroundColor: 'white',
        borderRadius: 12,
        margin: 3,
        marginBottom: 24
      }}>
      <Logo />
      <Text style={{ marginTop: 8 }}>Week {weekNumber}</Text>
    </View>
  )
}
const PostVideo6 = (props) => {
  const weeks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const { navigation } = props

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
            {weeks.map((number) => {
              return <WeekComponent weekNumber={number} key={number} />
            })}
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
