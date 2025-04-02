import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignIn = () => {
  return (
    <View style={{ flex: 1, color: "#FEFEFE" }}>
      <Image
        source={require("../assets/MaskBackGround.png")}
        style={{ width: "100%", height: 280, resizeMode: "cover" }}
      />
      <Text
        style={{
          color: "#030303",
          fontSize: 20,
          fontWeight: 600,
          width: 200,
          marginTop: 40,
          marginLeft: 20,
        }}
      >
        Get your groceries with nectar
      </Text>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 25,
          flexDirection: "row",
          paddingBottom: 5,
          borderBottomWidth: 1,
          borderBottomColor: "#E2E2E2",
        }}
      >
        <Image
          source={require("../assets/nation.png")}
          style={{ marginRight: 10 }}
        ></Image>
        <Text style={{ fontWeight: 400, color: "#030303" }}>+880</Text>
        <TextInput></TextInput>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: "#828282" }}>Or connect with social media</Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#5383EC",
            padding: 20,
            width: 320,
            borderRadius: 20,
            marginTop: 30,
          }}
        >
          <Image source={require("../assets/ggicon.png")} />
          <Text
            style={{
              color: "#FCFCFC",
              fontWeight: 600,
              fontSize: 16,
              marginRight: 40,
            }}
          >
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#4A66AC",
            padding: 20,
            width: 320,
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Image source={require("../assets/fbicon.png")} />
          <Text
            style={{
              color: "#FCFCFC",
              fontWeight: 600,
              fontSize: 16,
              marginRight: 40,
            }}
          >
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;
