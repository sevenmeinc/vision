export const content = {
  successfulHabits: {
    title: 'Past Successful Habits',
    description:
      'Choose one healthy habit you have sustained long-term. Reflect on why you think you’ve been able to stick with it for so long. This will give you information you can use to help you build and maintain new habits.',
    timeEst: 8,
    type: '$Reflection Activity',
    // image: require('./suc-hag-img.png'),
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
      'What insights from this reflection can you apply to your pursuit of this vision and goal?',
      'Where will you apply what you just reflected on in your daily life?'
    ]
  }
}
