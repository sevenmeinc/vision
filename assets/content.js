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
    duration: '8 min activity',
    videoUri:
      'https://content-stage.seven-internal.me/media/original_videos/Benefits_script.mp4',
    description: `One of the best ways to boost our motivation is to remind ourselves of all the reasons why we are working so hard. 

In this activity, we will guide you through identifying the short- and long-term benefits of completing your weekly commitment.`,
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
    postActivity: {
      description:
        'After reminding yourself why your weekly commitment is worth completing, reflect on your vision and goal below.',
      prompts: [
        'Can you think of short- and long-term benefits for these as well?'
      ]
    }
  },
  botMessages: {
    introduction:
      "Hey! I'm Seven. I will be guiding you through this activity.",
    readyMessage: 'Ready to get started?',
    startButtonTitle: "Let's get started!",
    laterButtonTitle: 'Come back later.',
    continueButtonTitle: 'Continue',
    messages: [
      {
        id: 1,
        messages: [
          {
            message: 'Great! First Question:'
          },
          {
            message:
              'What short-term benefits might you gain from completing your Weekly Commitment?'
          }
        ]
      },
      {
        id: 1,
        messages: [
          {
            message: 'Nice! Try to come with two more.'
          }
        ]
      },
      {
        id: 1,
        messages: [
          {
            message: 'Good job! Next question:'
          },
          {
            message:
              'What are three long-term benefits might you gain from completing your Weekly Commitment?'
          }
        ]
      },
      {
        id: 1,
        messages: [
          {
            message: 'Well done!'
          }
        ]
      },
      {
        id: 1,
        messages: [
          {
            message:
              'Reflect on what you wrote below. Maintain momentum by reminding yourself why you are working so hard.'
          }
        ]
      }
    ]
  },
  positiveThinking: {
    videoUri:
      'https://content-stage.seven-internal.me/media/original_videos/Positivethinking.MOV'
  }
}
