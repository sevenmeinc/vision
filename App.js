import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { enableScreens } from 'react-native-screens'
import { ActivityIndicator } from 'react-native'
import { useFonts } from 'expo-font'
import { LogBox } from 'react-native'
import MainNavigator from './src/navigations/MainNavigator'

enableScreens()

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested' // TODO: Remove when fixed
])
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#F9F9F9'
  }
}
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
    <NavigationContainer theme={MyTheme}>
      <MainNavigator />
    </NavigationContainer>
  )
}
