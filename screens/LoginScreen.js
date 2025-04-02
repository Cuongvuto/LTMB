import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";

import RNPickerSelect from "react-native-picker-select";
const LoginScreen = () => {
  const [selectedZone, setSelectedZone] = useState("banasree");
  const [selectedArea, setSelectedArea] = useState(null);
  return (
    <View style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
      <ImageBackground
        source={require("../assets/numberbg.png")}
        style={{
          width: "100%",
          height: 160,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Image source={require("../assets/carot.png")} />
      </ImageBackground>
      <View style={{ paddingHorizontal: 20, marginTop: 40 }}>
        <View>
          <Text style={{ fontSize: 23, fontWeight: 600, marginBottom: 10 }}>
            Loging
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 400, color: "#7C7C7C" }}>
            Enter your emails and password
          </Text>
        </View>
        <View
          style={{
            marginTop: 40,
            borderBottomWidth: 1,
            borderBottomColor: "#7C7C7C",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 400, color: "#7C7C7C" }}>
            Email
          </Text>
          <TextInput
            placeholder="Nhập email tại đây"
            style={{ paddingBottom: 15 }}
          />
        </View>
        <View
          style={{
            marginTop: 40,
            borderBottomWidth: 1,
            borderBottomColor: "#7C7C7C",
          }}
        >
          <Text>Password</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TextInput placeholder="Nhập mật khẩu tại đây" secureTextEntry />
            <Image source={require("../assets/eyes.png")} />
          </View>
        </View>
        <Text style={{ textAlign: "right", marginTop: 20, color: "#181725" }}>
          Forgot Password?
        </Text>
        <View style={{ alignItems: "center", marginTop: 0, fontSize: 14 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#53B175",
              width: 330,
              height: 67,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ fontSize: 18, color: "#FFF9FF" }}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text>Don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={{ color: "#53B175" }}>Singup</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require("../assets/backgroundBlue.png")}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 200, // Đặt chiều cao cố định
          zIndex: -1,
        }}
      />
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color: "black",
  },
  inputAndroid: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    color: "black",
  },
};
