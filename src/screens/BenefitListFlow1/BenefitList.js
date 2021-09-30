import React from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Colors } from '../../constants/colors'
import { BotMessage } from './Chat'

const List = ({ title, list }) => {
  const renderItem = ({ item, index }) => {
    return <Card index={index} item={item} />
  }
  return (
    <View>
      <Text
        style={{
          color: Colors.pianoBlack,
          fontFamily: 'medium',
          fontSize: 13,
          marginBottom: 12
        }}>
        {title}
      </Text>
      <FlatList
        keyExtractor={(item, index) => `${index}-${item}`}
        horizontal
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  )
}
const BenefitList = ({ navigation, route }) => {
  const shortTerms = route.params?.shortTerms
  const longTerms = route.params?.longTerms
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 16 }}>
          <BotMessage
            messages={[
              {
                message:
                  'Well done! Reflect on what you wrote below. Maintain momentum by reminding yourself of why you are working so hard. '
              }
            ]}
          />
          <List title="Short-term benefits" list={shortTerms} />
          <View style={{ marginTop: 24 }} />
          <List title="Long-term benefits" list={longTerms} />
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 16 }}>
        <Button
          title="Finish activity"
          onPress={() => navigation.navigate('Feedback')}
        />
      </View>
    </SafeAreaView>
  )
}

export default BenefitList
