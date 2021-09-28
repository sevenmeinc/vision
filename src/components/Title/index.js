import React from 'react'
import { Text, View } from 'react-native'

const containerStyle = {
  marginBottom: 10,
  marginTop: 1
}
const Title = ({ title }) => {
  return (
    <View sx={containerStyle}>
      <Text
        sx={{
          color: 'mako',
          fontSize: 34,
          letterSpacing: 0.37,
          fontFamily: 'bold',
          lineHeight: '41px'
        }}>
        {title}
      </Text>
    </View>
  )
}

Title.defaultProps = {
  title: 'Title'
}

export default Title
