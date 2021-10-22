import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Card from '../../components/Card'
import { Colors } from '../../constants/colors'

const List = ({ title, list }) => {
  const renderItem = ({ item, index }) => {
    return <Card index={index} item={item} />
  }
  return (
    <View style={{ paddingHorizontal: 16 }}>
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
const ReviewBenefitList = ({ shortTerms = [], longTerms = [], nextScreen }) => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
      <ScrollView>
        <Text
          style={{
            color: Colors.pianoBlack,
            fontFamily: 'medium',
            fontSize: 24,
            margin: 16,
            textAlign: 'center'
          }}>
          Time to review!
        </Text>
        <Text
          style={{
            color: Colors.pianoBlack,
            fontFamily: 'medium',
            fontSize: 16,
            marginBottom: 16,
            textAlign: 'center'
          }}>
          Reflect on what you wrote below. Maintain momentum by reminding
          yourself why you are working so hard.
        </Text>
        <View>
          <List title="Short-term benefits" list={shortTerms} />
          <View style={{ marginTop: 24 }} />
          <List title="Long-term benefits" list={longTerms} />
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', padding: 16, alignSelf: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            marginRight: 4,
            borderRadius: 100,
            width: 168,
            height: 52,
            justifyContent: 'center',
            backgroundColor: 'rgba(25, 51, 64, 0.08)'
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
              textAlign: 'center'
            }}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(nextScreen)}
          style={{
            marginLeft: 4,
            borderRadius: 100,
            width: 168,
            height: 52,
            justifyContent: 'center',
            backgroundColor: '#193340'
          }}>
          <Text
            style={{
              fontSize: 17,
              color: '#fff',
              fontWeight: '500',
              textAlign: 'center'
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ReviewBenefitList
