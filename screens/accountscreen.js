import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../navigation/appcontext";

const AccountScreen = () => {
  const { userInfo, logout } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{userInfo?.name}</Text>
      <Text style={styles.job}>{userInfo?.job}</Text>
      <Text style={styles.email}>{userInfo?.email}</Text>

      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  name: { fontSize: 24, fontWeight: "bold" },
  job: { fontSize: 18, color: "blue", marginBottom: 10 },
  email: { fontSize: 16, marginBottom: 20 },
  button: { backgroundColor: "#FFA500", padding: 15, borderRadius: 5 },
  buttonText: { color: "#FFF", fontWeight: "bold" },
});

export default AccountScreen;
