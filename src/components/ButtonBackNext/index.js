import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    width: 168,
    height: 49,
    justifyContent: 'center'
  },
  text: { fontSize: 17, fontWeight: '500', textAlign: 'center' }
})

const ButtonBackNext = ({ nextScreen, disableButton }) => {
  const navigation = useNavigation()

  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        paddingTop: 0,
        justifyContent: 'space-evenly'
      }}>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={{
          ...styles.button,
          backgroundColor: 'rgba(25, 51, 64, 0.08)'
        }}>
        <Text
          style={{
            ...styles.text
          }}>
          Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(nextScreen)}
        disabled={disableButton}
        style={{
          ...styles.button,
          backgroundColor: '#193340'
        }}>
        <Text
          style={{
            ...styles.text,
            color: '#fff'
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonBackNext
