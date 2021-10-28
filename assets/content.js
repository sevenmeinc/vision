export const content = {
  successfulHabits: {
    chatDescription:
      'Reflect on past successes and apply what you learned to your current goal.',
    title: 'Past Successful Habits',
    description:
      'We can learn from our past successes and use those same strategies towards our current goals. In this activity, you will identify one healthy habit that you have sustained long term and reflect on what made it successful.',
    timeEst: 8,
    type: 'Coaching Tool',
    prompts: [
      {
        contemplation: {
          title: 'Breathe',
          description:
            'Before we begin, take a deep breath in and out to shift into a reflective mental space.'
        },
        prompt:
          'What is one healthy habit that you have maintained for longer than six months?'
      },
      {
        contemplation: {
          title: 'Pause',
          description:
            'Celebrate your success by reminding yourself:\nmy hard work was worth it.'
        },
        prompt: 'What helped you continue with this habit?'
      }
    ],
    postActivity: {
      description:
        'With your past successful habit in mind, look back on your vision and goal.',
      prompts: [
        'How can you apply what you’ve learned as you pursue this vision and goal?'
      ]
    }
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
