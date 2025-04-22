import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const NumberScreen = () => {
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
            Enter your mobile number
          </Text>
          <Text style={{ marginTop: 25 }}>Mobile Number</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          padding: 10,
          fontWeight: 400,
          color: "#030303",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderBottomColor: "#E2E2E2",
        }}
      >
        <Image source={require("../assets/nation.png")}></Image>
        <Text>+880</Text>
        <TextInput keyboardType="numeric" style={{ flex: 1 }}></TextInput>
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
    </View>
  );
};
export default NumberScreen;
