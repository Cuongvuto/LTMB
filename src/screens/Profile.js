import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const [name, setName] = useState('Hung Nguyen');
  const [avatar, setAvatar] = useState('https://via.placeholder.com/80?text=Avatar');

  // Load dữ liệu từ AsyncStorage khi component mount hoặc focus
  useFocusEffect(
    React.useCallback(() => {
      const loadProfile = async () => {
        try {
          const savedName = await AsyncStorage.getItem('userName');
          const savedAvatar = await AsyncStorage.getItem('userAvatar');
          console.log('Profile loaded - Name:', savedName, 'Avatar:', savedAvatar);
          if (savedName) setName(savedName);
          if (savedAvatar) setAvatar(savedAvatar);
        } catch (error) {
          console.log('Error loading profile:', error);
        }
      };
      loadProfile();
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Edit Profile"
            onPress={() => navigation.navigate('EditProfile')}
            color="#00b4d8"
          />
          <View style={styles.buttonSpacer} />
          <Button title="Sign Out" onPress={logout} color="#f5a623" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 150,
    backgroundColor: '#00b4d8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileInfo: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#00b4d8',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
  },
  buttonSpacer: {
    height: 10,
  },
});

export default ProfileScreen;