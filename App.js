import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font'
import MainNavigator from './src/navigations/MainNavigator'

enableScreens()
export default function App() {
  let [fontsLoaded] = useFonts({
    light: require('./assets/fonts/SF-Pro-Text-Light.ttf'),
    medium: require('./assets/fonts/SF-Pro-Text-Medium.ttf'),
    regular: require('./assets/fonts/SF-Pro-Text-Regular.ttf'),
    semiBold: require('./assets/fonts/SF-Pro-Text-Semibold.ttf'),
    bold: require('./assets/fonts/SF-Pro-Text-Bold.ttf')
  })
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#FFFFFF" />
  }
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}
