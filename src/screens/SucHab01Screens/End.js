// Final Page for the Flow
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MessageLanding from '../../components/MessageLanding'
import { content } from '../../../assets/content'

const {
  successfulHabits: { title, timeEst, type }
} = content

const End = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Flows')}
      style={{ height: '100%' }}>
      <MessageLanding
        timeEst={timeEst}
        title={title}
        activityType={type}
        goTo={() => {}}
      />
    </TouchableOpacity>
  )
}

export default End
