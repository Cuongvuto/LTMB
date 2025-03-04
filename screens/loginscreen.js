import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import thư viện icon
import { AppContext } from "../navigation/appcontext";

const SignInScreen = ({ navigation }) => {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {
  //     GoogleSignin.configure({
  //       webClientId: "YOUR_GOOGLE_WEB_CLIENT_ID",
  //     });
  //   }, []);

  const handleLogin = () => {
    if (email && password) {
      const userData = {
        name: email,
        job: "Mobile Developer",
        email: email,
      };
      login(userData);
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      {/* Chỉ hiển thị icon Google & Facebook */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="google" size={30} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Icon name="facebook" size={30} color="#4267B2" />
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text>Not yet a member? </Text>
        <TouchableOpacity onPress={() => alert("Navigate to SignUp")}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 },
  forgotText: { textAlign: "right", color: "blue", marginBottom: 10 },
  button: {
    backgroundColor: "#FFA500",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: { color: "#FFF", fontWeight: "bold" },
  orText: { textAlign: "center", marginVertical: 10 },
  socialContainer: { flexDirection: "row", justifyContent: "center", gap: 20 },
  iconButton: { padding: 10 },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: { color: "blue" },
});

export default SignInScreen;
