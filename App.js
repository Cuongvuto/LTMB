import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddUserScreen from './screens/AddUserScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Người dùng' }} />
        <Stack.Screen name="AddUser" component={AddUserScreen} options={{ title: 'Thêm người dùng' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
