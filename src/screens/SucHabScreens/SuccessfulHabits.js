// Initial landing Page for the Flow
import React from 'react'
import MessageLanding from '../../components/MessageLanding'
import { content } from '../../../assets/content'

const {
  successfulHabits: { title, timeEst, type }
} = content

const SucHab01 = () => {
  return (
    <MessageLanding
      timeEst={timeEst}
      title={title}
      activityType={type}
      goTo={'PreActivity'}
    />
  )
}

export default SucHab01
