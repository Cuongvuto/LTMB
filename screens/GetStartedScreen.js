// screens/GetStartedScreen.js
import React from 'react';
import { View, ImageBackground, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window'); // Lấy chiều rộng màn hình thiết bị

const GetStartedScreen = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.replace('PhoneLogin'); // Chuyển sang màn hình tiếp theo
  };

  return (
    <ImageBackground
      source={require('../assets/8140 1.png')} // Hình nền
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Hình ảnh chữ ở giữa màn hình */}
        <Image
          source={require('../assets/Welcome to our store.png')} // Hình ảnh chữ
          style={styles.mainTextImage}
          resizeMode="contain"
        />
      </View>
      {/* Nút Get Started nằm gần cuối màn hình */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Image
          source={require('../assets/button.png')} // Hình ảnh trên nút
          style={styles.buttonImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Căn giữa hình ảnh chữ theo chiều dọc
    alignItems: 'center', // Căn giữa hình ảnh chữ theo chiều ngang
  },
  mainTextImage: {
    width: SCREEN_WIDTH * 0.8, // Chiếm 80% chiều rộng màn hình
    height: 100, // Điều chỉnh chiều cao tùy theo hình ảnh
  },
  button: {
    position: 'absolute', // Đặt vị trí tuyệt đối để nút nằm gần đáy
    bottom: 20, // Cách đáy màn hình 20px, bạn có thể điều chỉnh
    width: 353, // Kích thước nút
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Căn giữa nút theo chiều ngang
    backgroundColor: 'transparent', // Nền trong suốt
  },
  buttonImage: {
    width: '100%', // Hình ảnh lấp đầy nút
    height: '100%',
  },
});

export default GetStartedScreen;