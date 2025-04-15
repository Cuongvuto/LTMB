import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = 'https://jsonplaceholder.typicode.com/users';

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(API_URL);
      console.log('Fetched users:', response.data); // DEBUG
      setUsers(response.data);
    } catch (err) {
      setError('Lỗi khi tải người dùng.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchUsers);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách người dùng</Text>

      {loading && <ActivityIndicator size="large" color="brown" />}
      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>• {item.name}</Text>
        )}
      />

      <Button title="➕ Thêm người dùng" onPress={() => navigation.navigate('AddUser')} color="#8B4513" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: { padding: 8, borderBottomWidth: 0.5, borderBottomColor: '#ccc' },
  error: { color: 'red', marginVertical: 10 },
});
