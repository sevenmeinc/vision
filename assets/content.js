export const content = {
  successfulHabits: {
    title: 'Past Successful Habits',
    description:
      'Identify one current healthy habit you have been able to sustain long-term. Reflect on why you think you’ve been able to stick with it for so long. This will provide insights you can use to help build and maintain new healthy habits. If you’re a visual learner, consider drawing or writing what comes to mind.',
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
      'What insight did you gain from this reflection that you can apply in your pursuit of this vision and goal?'
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
      {
        prompt:
          'What is one healthy habit that you have maintained for longer than six months?'
      },
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
