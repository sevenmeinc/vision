import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'

const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  lottie: {
    width: windowWidth * 0.75,
    height: windowWidth * 0.75
  }
})

const Breathe = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <AnimatedLoader
        visible={true}
        source={require('./breathe.json')}
        animationStyle={styles.lottie}
        speed={1}
      />
    </View>
  )
}

export default Breathe
