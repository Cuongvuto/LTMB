import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PhoneLoginScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('OtpScreen'); // Chuyển đến màn hình nhập số điện thoại
  };

  return (
    <View style={styles.container}>
      {/* Ảnh trên cùng */}
      <Image source={require('../assets/Mask Group.png')} style={styles.topImage} resizeMode="contain" />

      {/* Ô nhập số điện thoại (bấm vào để chuyển trang) */}
      <TouchableOpacity style={styles.phoneInputContainer} onPress={handlePress}>
        <Image source={require('../assets/Group 6798 (1).png')} style={styles.phoneInputImage} />
      </TouchableOpacity>

      {/* Nút Google */}
      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/google.png')} style={styles.socialButtonImage} />
      </TouchableOpacity>

      {/* Nút Facebook */}
      <TouchableOpacity style={styles.socialButton}>
        <Image source={require('../assets/facebook.png')} style={styles.socialButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  topImage: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 30,
    justifyContent: 'center',
  },
  flagIcon: {
    width: 40,
    height: 30,
    marginRight: 10,
  },
  phoneInputImage: {
    width: 200, // Điều chỉnh kích thước ảnh nhập số
    height: 50,
  },
  socialButton: {
    width: '90%',
    height: 60,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButtonImage: {
    width: '100%',
    height: '100%',
  },
});

export default PhoneLoginScreen;
