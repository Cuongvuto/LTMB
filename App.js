import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import BoardingScreen from "./screens/Boarding";
import SplashScreen from "./screens/SplashScreen";
import SignIn from "./screens/SignIn";
import NumberScreen from "./screens/NumberScreen";
import Verification from "./screens/Verification";
import SelectLocation from "./screens/SelectLocation";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content" // Chữ trắng
        backgroundColor="black" //  Nền đen
        translucent={true} //  Để nền đen hiển thị rõ ràng
      />
      <SelectLocation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // Tránh notch trên Android
  },
});
