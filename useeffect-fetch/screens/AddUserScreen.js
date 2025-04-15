import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function AddUserScreen({ navigation }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [responseText, setResponseText] = useState(''); // để hiển thị kết quả

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  const handleAddUser = async () => {
    if (!name.trim()) return Alert.alert('Vui lòng nhập tên');

    setLoading(true);
    setError('');
    setResponseText('');
    try {
      const response = await axios.post(API_URL, { name });
      console.log('Thêm thành công:', response.data); // DEBUG
      setResponseText(JSON.stringify(response.data)); // tránh lỗi #130
      Alert.alert('Thêm thành công');
      navigation.goBack(); // quay lại màn hình chính
    } catch (err) {
      setError('Lỗi khi thêm người dùng.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thêm người dùng mới</Text>

      {loading && <ActivityIndicator size="large" color="brown" />}
      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Nhập tên người dùng..."
        value={name}
        onChangeText={setName}
      />

      <Button title="Lưu" onPress={handleAddUser} color="#8B4513" />

      {responseText !== '' && (
        <Text style={styles.response}>Phản hồi API: {responseText}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  error: { color: 'red', marginBottom: 10 },
  response: { marginTop: 10, color: 'green' },
});
