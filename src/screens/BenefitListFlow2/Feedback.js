import React from 'react'
import Feedback from '../../components/Feedback'

const FeedbackScreen = (props) => {
  return <Feedback onPress={() => props.navigation.navigate('Flow 2')} />
}

export default FeedbackScreen
