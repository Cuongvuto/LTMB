import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const OtpVerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const phoneNumber = route.params?.phone || ''; // Lấy số điện thoại từ tham số truyền vào

  const handleVerify = () => {
    if (otp.length === 6) {
      alert('OTP Verified Successfully!');
      navigation.navigate('Home');
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút Trở về */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/Frame.png')} style={styles.backIcon} />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter the OTP Code</Text>

      {/* Hiển thị số điện thoại */}
      <Text style={styles.subtitle}>Code sent to {phoneNumber}</Text>

      {/* Ô nhập OTP */}
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        maxLength={6}
        value={otp}
        onChangeText={setOtp}
      />

      {/* Nút Gửi lại OTP */}
      <TouchableOpacity onPress={() => alert('OTP Resent!')}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>

      {/* Nút Tiếp tục */}
      <TouchableOpacity style={styles.nextButton} onPress={handleVerify}>
        <Image source={require('../assets/Group 6802.png')} style={styles.nextIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 5,
  },
  backIcon: {
    width: 30, // Kích thước giống màn hình nhập số điện thoại
    height: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    paddingVertical: 10,
    marginHorizontal: 50,
  },
  resendText: {
    textAlign: 'center',
    color: '#007AFF',
    marginTop: 15,
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    padding: 10,
  },
  nextIcon: {
    width: 50, // Kích thước giống màn hình nhập số điện thoại
    height: 50,
  },
  backIcon: {
    width: 24,  // Giảm kích thước của nút Back
    height: 24, // Giảm kích thước của nút Back
  },
});

export default OtpVerificationScreen;
