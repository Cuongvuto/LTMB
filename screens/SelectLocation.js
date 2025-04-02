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
const SelectLocation = () => {
  const [selectedZone, setSelectedZone] = useState("banasree");
  const [selectedArea, setSelectedArea] = useState(null);
  return (
    <View style={{ flex: 1, backgroundColor: "#FCFCFC" }}>
      <ImageBackground
        source={require("../assets/numberbg.png")}
        style={{ width: "100%", height: 160 }}
      >
        <View style={{ marginTop: 20, padding: 15 }}>
          <TouchableOpacity>
            <Image source={require("../assets/vectorleft.png")}></Image>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: -100,
        }}
      >
        <Image source={require("../assets/illustration.png")} />
      </View>
      <View
        style={{ alignItems: "center", marginTop: 50, marginHorizontal: 30 }}
      >
        <Text style={{ fontWeight: 600, fontSize: 23 }}>
          Select Your Location
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 13,
            fontWeight: 400,
            color: "#7C7C7C",
          }}
        >
          Swithch on your location to stay in tune with what’s happening in your
          area
        </Text>
      </View>
      <View style={{ marginTop: 80 }}>
        <Text style={{ marginLeft: 15, color: "#7C7C7C" }}>Your Zone</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedZone(value)}
          items={[
            { label: "Banasree", value: "banasree" },
            { label: "Dhanmondi", value: "dhanmondi" },
            { label: "Uttara", value: "uttara" },
          ]}
          value={selectedZone} // Đặt giá trị mặc định
          style={pickerSelectStyles}
        />
        <View
          style={{
            borderBottomWidth: 1,
            color: "#E2E2E2",
            marginHorizontal: 15,
          }}
        ></View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ marginLeft: 15, color: "#7C7C7C" }}>Your Area</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedZone(value)}
          items={[]}
          value={selectedZone}
          style={pickerSelectStyles}
          placeholder={{ label: "Type your area", value: null }}
        />
        <View
          style={{
            borderBottomWidth: 1,
            color: "#E2E2E2",
            marginHorizontal: 15,
          }}
        ></View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
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
          <Text style={{ fontSize: 18, color: "#FFF9FF" }}>Submit</Text>
        </TouchableOpacity>
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
export default SelectLocation;

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
