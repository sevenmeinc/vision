import React from 'react'
import { View, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../constants/colors'

const CoachHeader = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.cottonField,
        width: '100%',
        alignItems: 'center'
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../../assets/coachHeader.png')}
          style={{ marginRight: 12 }}
        />
        <View style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#16161a' }}>
            Haylie Gouse
          </Text>
          <Text style={{ fontSize: 14, color: '#666666' }}>
            Positive Thinking
          </Text>
        </View>
      </View>
      <Ionicons
        name="md-close-sharp"
        size={24}
        color="black"
        onPress={() => navigation.navigate('positiveThinkingHome')}
      />
    </View>
  )
}

export default CoachHeader
