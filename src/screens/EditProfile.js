import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  // Load dữ liệu từ AsyncStorage khi component mount
  useEffect(() => {
    const loadProfile = async () => {
      try {
        const savedName = await AsyncStorage.getItem('userName');
        const savedAvatar = await AsyncStorage.getItem('userAvatar');
        if (savedName) setName(savedName);
        if (savedAvatar) setAvatar(savedAvatar);
        console.log('Loaded profile - Name:', savedName, 'Avatar:', savedAvatar);
      } catch (error) {
        console.log('Error loading profile:', error);
      }
    };
    loadProfile();
  }, []);

  // Hàm chọn ảnh từ thư viện
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('Permission Denied', 'Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
      console.log('Selected avatar URI:', result.assets[0].uri);
    }
  };

  // Hàm lưu thông tin chỉnh sửa
  const saveProfile = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Name cannot be empty!');
      return;
    }
    try {
      await AsyncStorage.setItem('userName', name);
      if (avatar) await AsyncStorage.setItem('userAvatar', avatar);
      console.log('Saved profile - Name:', name, 'Avatar:', avatar);
      Alert.alert('Success', `Profile updated!\nName: ${name}\nAvatar: ${avatar}`);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save profile!');
      console.log('Error saving profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
        <Image
          source={{ uri: avatar || 'https://via.placeholder.com/100?text=Avatar' }}
          style={styles.avatar}
        />
        <Text style={styles.changeAvatarText}>Change Avatar</Text>
      </TouchableOpacity>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />
      <Button title="Save" onPress={saveProfile} color="#f5a623" />
      <Button title="Cancel" onPress={() => navigation.goBack()} color="#888" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#00b4d8',
  },
  changeAvatarText: {
    color: '#00b4d8',
    marginTop: 10,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
});

export default EditProfileScreen;