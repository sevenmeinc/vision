import React from 'react'
import { useNavigation } from '@react-navigation/native'
import PreActivityCard from '../../components/PreActivityCard'
import { content } from '../../../assets/content'

const {
  successfulHabits: { title, timeEst, description, type }
} = content

const PreActivity = () => {
  const navigation = useNavigation()
  return (
    <PreActivityCard
      handleClose={() => navigation.navigate('SuccessfulHabits01')}
      activityType={type}
      image={require('../../../assets/suc-hab-img.png')}
      title={title}
      timeEst={timeEst}
      description={description}
      btn1={{
        handler: () => {
          console.log('btn1, go to next')
        },
        label: 'Get started'
      }}
      btn2={{
        handler: () => navigation.navigate('SuccessfulHabits01'),
        label: 'Remind me later'
      }}
    />
  )
}

export default PreActivity
