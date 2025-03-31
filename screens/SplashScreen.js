// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  // Tự động chuyển sang màn hình GetStarted sau 3 giây
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // 'Home' giờ là GetStartedScreen trong App.js
    }, 3000); // 3000ms = 3 giây

    return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Group 1.png')} // Logo của bạn
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.subText}>online groceriet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50', // Màu xanh lá
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 100,
  },
  subText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 10,
  },
});

export default SplashScreen;