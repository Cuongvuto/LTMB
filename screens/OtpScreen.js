import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleNext = () => {
    if (phoneNumber.length >= 8) {
      navigation.navigate('OtpVerification', { phone: `+880${phoneNumber}` });
    } else {
      alert('Please enter a valid phone number');
    }
  };

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/Frame.png')} style={styles.icon} />
      </TouchableOpacity>

      {/* Tiêu đề */}
      <Text style={styles.title}>Enter your mobile number</Text>

      {/* Ô nhập số điện thoại */}
      <View style={styles.inputContainer}>
        <Text style={styles.countryCode}>+880</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your number"
          keyboardType="phone-pad"
          maxLength={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Nút Tiếp theo */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Image source={require('../assets/Group 6802.png')} style={styles.icon} />
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
      padding: 5, // Giảm padding để không chiếm nhiều diện tích
    },
    backIcon: {
      width: 24,  // Giảm kích thước của nút Back
      height: 24, // Giảm kích thước của nút Back
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: '#ccc',
      paddingBottom: 5,
      marginHorizontal: 20,
    },
    countryCode: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 5,
    },
    input: {
      flex: 1,
      fontSize: 18,
    },
    nextButton: {
      position: 'absolute',
      bottom: 40,
      right: 20,
      padding: 10,
    },
    nextIcon: {
      width: 50, // Giữ nguyên kích thước của nút Next
      height: 50, // Giữ nguyên kích thước của nút Next
    },
  });
  
  
export default OtpScreen;
