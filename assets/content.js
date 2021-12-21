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
      'https://content-stage.seven-internal.me/media/original_videos/Positivethinking.MOV',
    info: {
      chatDescription:
        'Learn to constructively reframe your thoughts with this exercise.',
      title: 'Positive Thinking',
      timeEst: 8,
      type: 'Coaching Tool'
    },
    preActivity: [
      // positiveThinking1
      {
        title: 'What is positive thinking?',
        text: 'Positive thinking is kind thinking. Even when the negative things we say to ourselves feel true, there are always kinder, healthier, and more helpful ways to frame our thoughts. ',
        onNext: 'positiveThinking2',
        onBack: 'positiveThinkingHome'
      },
      {
        title: 'The impact of our thoughts',
        text: 'The way we talk to ourselves determines a lot about our lives. Negative self-talk can erode our sense of self and undermine our efforts. Conscious reframing of our thoughts can change this story, even going so far as to reduce depression and improve cardiovascular health.',
        onNext: 'positiveThinking3',
        onBack: 'positiveThinkingHome'
      },
      {
        title: 'Observe and reframe',
        text: 'In this activity, you will observe your negative self-talk and try reshaping it. This may feel uncomfortable and challenging. Be patient with yourself: it will take time and effort to rewrite the negative stories you have told yourself. Keep practicing, and it will get easier.',
        onNext: 'positiveThinking4',
        onBack: 'positiveThinkingHome'
      },
      {
        title: 'Some examples',
        text: 'Wondering what we mean by negative or positive self-talk? Check out these examples to see what negative (N) self talk might sound like and how you might reframe it in a positive (P) way.',
        onNext: 'postVideo1',
        onBack: 'positiveThinkingHome'
      }
    ],
    activity: {
      prompts: [
        {
          prompt: {
            title: '',
            text: 'What are 2-3 negative statements you have told yourself this month?',
            example: 'I will never...',
            img: '',
            onNext: 'postVideo2'
          },
          contemplation: {
            title: '',
            text: [
              'Identifying negative self-talk isn’t enjoyable',
              'but it’s the first step to reshaping your thought life.'
            ],
            onNext: 'postVideo3'
          }
        },
        {
          prompt: {
            title: '',
            text: ['Reword each statement so that it is positive.'],
            img: '',
            onNext: 'postVideo4'
          },
          contemplation: {
            title: '',
            text: [
              'Let these new statements sink in.',
              'Celebrate the courage that it took to face your negative self-talk and reshape it.'
            ],
            onNext: 'postVideo5'
          }
        }
      ]
    },
    postActivity: [
      {
        prompts: [
          'What did you learn from this activity?',
          'Where can you apply this knowledge in your everyday life?',
          'What is one thing you want to be able to do comfortably a month from now?'
        ],
        onNext: 'postVideo6'
      },
      {
        title: 'Bravo! 👏',
        text: [
          'Look at how much you’ve accomplished!',
          'Each lesson you learn and activity you complete brings you one step closer to achieving your goal.'
        ],
        onNext: 'Flows'
      }
    ]
  }
}
