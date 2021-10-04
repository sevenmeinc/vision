import React from 'react'
import { useNavigation } from '@react-navigation/native'
import PreActivityCard from '../../components/PreActivityCard'

const PreActivity = ({ route }) => {
  const navigation = useNavigation()
  const { title, timeEst, description, type } = route.params

  return (
    <PreActivityCard
      handleClose={() => navigation.navigate('SuccessfulHabits01')}
      activityType={type}
      image={require('../../../assets/suc-hab-img.png')}
      title={title}
      timeEst={timeEst}
      description={description}
      btn1={{
        handler: () =>
          navigation.navigate('PromptAudio', {
            ...route.params,
            state: {
              responses: 0
            }
          }),
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
