import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigations/MainNavigator';
import { enableScreens } from 'react-native-screens';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

enableScreens();
export default function App() {
  let [fontsLoaded] = useFonts({
    light: require('./assets/fonts/SF-Pro-Text-Light.ttf'),
    medium: require('./assets/fonts/SF-Pro-Text-Medium.ttf'),
    regular: require('./assets/fonts/SF-Pro-Text-Regular.ttf'),
    semiBold: require('./assets/fonts/SF-Pro-Text-Semibold.ttf'),
    bold: require('./assets/fonts/SF-Pro-Text-Bold.ttf')
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
