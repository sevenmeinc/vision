import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  stretch: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'stretch'
  }
})

const SuccessfulHabits = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        style={{ ...styles.stretch }}
        onPress={() => {
          console.log('go to next page')
        }}>
        <Image
          style={styles.stretch}
          source={require('../assets/SuccessfulHabitsHome.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SuccessfulHabits
