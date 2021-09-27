import { Platform } from 'react-native';
import { TransitionPresets } from '@react-navigation/stack';

export const modalOptions =
  Platform.OS === 'ios'
    ? {
        screenOptions: ({ route, navigation }) => {
          return {
            gestureEnabled: false,
            cardOverlayEnabled: true,
            headerStyle: {
              backgroundColor: 'transparent'
            },
            ...TransitionPresets.ModalPresentationIOS
          };
        }
      }
    : {
        screenOptions: {
          gestureEnabled: false,
          cardOverlayEnabled: false,
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0
          },
          ...TransitionPresets.ScaleFromCenterAndroid
        }
      };


      