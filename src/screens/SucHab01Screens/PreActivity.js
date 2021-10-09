import React from 'react'
import { useNavigation } from '@react-navigation/native'
import PreActivityCard from '../../components/PreActivityCard'

const PreActivity = ({ route }) => {
  const navigation = useNavigation()
  const { title, timeEst, description, type } = route.params

  return (
    <PreActivityCard
      image={require('../../../assets/suc-hab-img.png')}
      title={title}
      timeEst={timeEst}
      description={description}
      btn1={{
        handler: () =>
          navigation.navigate('Breathe', {
            ...route.params,
            state: {
              responses: 0,
              stage: 0
            }
          }),
        label: 'Get started'
      }}
      btn2={{
        handler: () => navigation.goBack(),
        label: 'Remind me later'
      }}
    />
  )
}

export default PreActivity
