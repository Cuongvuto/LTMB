import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const Verification = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
      <ImageBackground
        source={require("../assets/numberbg.png")}
        style={{ width: "100%", height: 160 }}
      >
        <View style={{ marginTop: 20, padding: 10 }}>
          <TouchableOpacity>
            <Image source={require("../assets/vectorleft.png")}></Image>
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 600,
              color: "#181725",
              fontSize: 23,
              marginTop: 40,
            }}
          >
            Enter your 4-digit code
          </Text>
          <Text style={{ marginTop: 25 }}>Code</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          margin: 10,
          fontWeight: 400,
          color: "#030303",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderBottomColor: "#E2E2E2",
        }}
      >
        <TextInput
          keyboardType="numeric"
          style={{ flex: 1 }}
          placeholder="- - - -"
        ></TextInput>
      </View>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 60,
          backgroundColor: "#53B175",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 30,
          right: 10,
        }}
      >
        <Image source={require("../assets/vector.png")}></Image>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 45,
          left: 10,
        }}
      >
        <Text style={{ color: "#53B175", fontWeight: 400 }}>Resend Code</Text>
      </View>
    </View>
  );
};
export default Verification;
