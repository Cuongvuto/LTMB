import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppProvider, AppContext } from "./mywork/navigation/appcontext";
import SignInScreen from "./mywork/screens/loginscreen";
import ForgotPasswordScreen from "./mywork/screens/forgotpassword";
import MainTabs from "./mywork/navigation/maintabs";

const Stack = createStackNavigator();
const AppNavigator = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={MainTabs} />
      ) : (
        <>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
