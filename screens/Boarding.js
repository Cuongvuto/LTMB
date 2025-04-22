import React from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
const BoardingScreen = () => {
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={require("../assets/onBodingBackGround.png")}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 270,
        }}
      >
        <Image source={require("../assets/carrot.png")}></Image>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "#FFFFFF",
              fontSize: 48,
              width: 260,
            }}
          >
            Welcome to our store
          </Text>
        </View>
        <Text style={{ color: "grey", fontSize: 15 }}>
          Ger your groceries in as fast as one hour
        </Text>
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
          <Text style={{ fontSize: 18, color: "#FFF9FF" }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default BoardingScreen;
