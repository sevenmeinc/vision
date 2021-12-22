// Initial landing Page for the Flow
import React from 'react'
import MessageLanding from '../../components/MessageLanding'
import { content } from '../../../assets/content'

const {
  positiveThinking: {
    info: { title, timeEst, type, chatDescription }
  }
} = content

const PositiveThinkingHome = () => {
  return (
    <MessageLanding
      timeEst={timeEst}
      title={title}
      activityType={type}
      chatDescription={chatDescription}
      goTo={['positiveThinking1', { ...content.positiveThinking }]}
    />
  )
}

export default PositiveThinkingHome
