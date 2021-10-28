// Initial landing Page for the Flow
import React from 'react'
import MessageLanding from '../../components/MessageLanding'
import { content } from '../../../assets/content'

const {
  successfulHabits: { title, timeEst, type, chatDescription }
} = content

const SucHab01 = () => {
  return (
    <MessageLanding
      timeEst={timeEst}
      title={title}
      activityType={type}
      chatDescription={chatDescription}
      goTo={['PreActivity', { ...content.successfulHabits }]}
    />
  )
}

export default SucHab01
