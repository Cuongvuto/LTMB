import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validatePhone = () => {
    if (!/^09\d{9}$/.test(phone)) {
      setError("Số điện thoại không hợp lệ (phải bắt đầu bằng 09 và đủ 11 số)");
      return false;
    }
    setError("");
    return true;
  };

  const handleContinue = () => {
    if (validatePhone()) {
      Alert.alert("Welcome", "Chào mừng đến với khoá học React Native tại CodeFresher.vn", [
        { text: "OK", onPress: () => router.replace("/home") },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập số điện thoại</Text>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder="Nhập số điện thoại"
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
        onBlur={validatePhone}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Tiếp tục" onPress={handleContinue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: { width: "100%", borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  inputError: { borderColor: "red" },
  error: { color: "red", marginBottom: 10 },
});
