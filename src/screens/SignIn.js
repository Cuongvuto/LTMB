import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import IconButton from '../components/IconButton';
import { AuthContext } from '../contexts/AuthContext';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login('sample-token');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <CustomTextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.forgotText} onPress={() => navigation.navigate('ForgotPassword')}>
        Forgot Password?
      </Text>
      <IconButton
        iconName="google"
        buttonText="Sign in with Google"
        backgroundColor="#DB4437"
        onPress={() => alert('Google Sign-In')}
      />
      <IconButton
        iconName="facebook"
        buttonText="Sign in with Facebook"
        backgroundColor="#4267B2"
        onPress={() => alert('Facebook Sign-In')}
      />
      <Text style={styles.signUpText} onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgotText: {
    color: 'blue',
    marginVertical: 10,
  },
  signUpText: {
    color: 'blue',
    marginTop: 20,
  },
});

export default SignInScreen;