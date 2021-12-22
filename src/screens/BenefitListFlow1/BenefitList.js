import React from 'react'
import { SafeAreaView, View, Text, FlatList, ScrollView } from 'react-native'
import BotMessage from '../../components/BotMessage'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Colors } from '../../constants/colors'
import { content } from '../../../assets/content'

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
  const shortTerms = route.params?.shortTerms ?? []
  const longTerms = route.params?.longTerms ?? []
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 10,
          justifyContent: 'space-between'
        }}>
        <View style={{ paddingHorizontal: 16 }}>
          <BotMessage messages={content.botMessages.messages[4].messages} />
          <List title="Short-term benefits" list={shortTerms} />
          <View style={{ marginTop: 24 }} />
          <List title="Long-term benefits" list={longTerms} />
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          <Button
            title={content.botMessages.continueButtonTitle}
            onPress={() => navigation.navigate('Feedback')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BenefitList
