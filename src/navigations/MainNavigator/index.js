import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import { modalOptions } from '../utils';
import Flow1 from '../../screens/Flow1';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator {...modalOptions} >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
      />
     <Stack.Screen
        name='flow1'
        component={Flow1}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
