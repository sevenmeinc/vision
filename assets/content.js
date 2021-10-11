export const content = {
  successfulHabits: {
    title: 'Past Successful Habits',
    description:
      'Choose one healthy habit you have sustained long-term. Reflect on why you think you’ve been able to stick with it for so long. This will give you information you can use to help you build and maintain new habits.',
    timeEst: 8,
    type: 'Reflection Activity',
    prompts: [
      {
        contemplation:
          'Take a moment to reflect on the past few years. Consider what healthy habits you have stuck with for more than six months.',
        prompt: 'What is one healthy habit you sustained long-term?'
      },
      {
        prompt:
          'Why do you think you have been able to stick with it for so long?'
      }
    ],
    postActivity: [
      'What insights from this reflection can you apply to your pursuit of this vision and goal?'
    ]
  },
  benefitsList: {
    title: 'Benefits List',
    prompts: [
      {
        contemplation:
          'Tell us all the short-term benefits that you imagine gaining from completing your Weekly Commitment.',
        prompt: 'Short-term benefits'
      },
      {
        prompt: 'Long-term benefits',
        contemplation:
          'What are the long-term benefits you imagine gaining from completing your Weekly Commitment?'
      },
      { prompt: 'What is one healthy habit you sustained long-term?' },
      {
        prompt:
          'Why do you think you have been able to stick with it for so long?'
      }
    ],
    postActivity: [
      'Where will you apply what you just reflected on in your daily life?'
    ]
  }
}
