import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Extra/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
