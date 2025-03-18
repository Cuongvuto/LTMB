import React from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const categories = [
    { id: '1', title: 'Pizza', image: require('../../assets/images/pexels-photo-803290.jpeg') },
    { id: '2', title: 'Burgers', image: require('../../assets/images/pexels-photo-1633578.jpeg') },
    { id: '3', title: 'Steak', image: require('../../assets/images/pexels-photo-675951.jpeg') },
  ];

  const popularItems = [
    { id: '1', title: 'Food 1', price: '$1', image: require('../../assets/images/pexels-photo-1640777.jpeg'), by: 'By Viet Nam' },
    { id: '2', title: 'Food 2', price: '$3', image: require('../../assets/images/pexels-photo-1640777.jpeg'), by: 'By Someone' },
    { id: '3', title: 'Food 3', price: '$5', image: require('../../assets/images/pexels-photo-1640777.jpeg'), discount: '10% OFF' },
    { id: '4', title: 'Food 4', price: '$7', image: require('../../assets/images/pexels-photo-1640777.jpeg') },
  ];

  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.title}</Text>
    </View>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.popularItem}>
      <Image source={item.image} style={styles.popularImage} />
      <View style={styles.popularInfo}>
        <Text style={styles.popularTitle}>{item.title}</Text>
        {item.by && <Text style={styles.popularBy}>{item.by}</Text>}
        <Text style={styles.popularPrice}>{item.price}</Text>
        {item.discount && (
          <Text style={styles.discount}>{item.discount}</Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="location-outline" size={20} color="#000" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
          placeholderTextColor="#888"
        />
        <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
      </View>
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />
      <Text style={styles.sectionTitle}>Popular Items</Text>
      <FlatList
        data={popularItems}
        renderItem={renderPopularItem}
        keyExtractor={(item) => item.id}
        style={styles.popularList}
      />
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginHorizontal: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  categoryList: {
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  popularList: {
    marginBottom: 20,
  },
  popularItem: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
  },
  popularImage: {
    width: 100,
    height: 80,
    borderRadius: 10,
  },
  popularInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  popularTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularBy: {
    fontSize: 12,
    color: '#666',
  },
  popularPrice: {
    fontSize: 14,
    color: '#000',
  },
  discount: {
    fontSize: 12,
    color: 'red',
    backgroundColor: '#ffebee',
    padding: 2,
    borderRadius: 3,
  },
  viewAllButton: {
    padding: 10,
    backgroundColor: '#f5a623',
    borderRadius: 5,
    alignItems: 'center',
  },
  viewAllText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;