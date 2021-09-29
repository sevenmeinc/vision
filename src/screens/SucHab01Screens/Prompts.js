import React, { useState } from 'react'
import { View, Dimensions } from 'react-native'
import Space from '../../components/Space'
import PromptContainer from '../../components/PromptContainer'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Prompts = ({ route }) => {
  const [prompts, setPrompts] = useState(route.params.prompts)
  return (
    <View
      style={{
        height: windowHeight,
        padding: 16,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <PromptContainer prompt={prompts[0]} />
    </View>
  )
}

export default Prompts
