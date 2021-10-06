import React from 'react'
import { View, StyleSheet } from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import colors from '../../assets/colors'

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
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
        overlayColor={colors.lavenderBlossom}
        source={require('./breathe.json')}
        animationStyle={styles.lottie}
        speed={1}
      />
    </View>
  )
}

export default Breathe
