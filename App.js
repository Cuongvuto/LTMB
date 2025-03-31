import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import PhoneLoginScreen from './screens/PhoneLoginScreen';
import OtpScreen from './screens/OtpScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={GetStartedScreen} />
        <Stack.Screen name="PhoneLogin" component={PhoneLoginScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
