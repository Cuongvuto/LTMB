import React from 'react';
import { SectionList, FlatList, View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';

const groupedProducts = [
  { title: 'Category A', data: ['Product A1', 'Product A2', 'Product A3'] },
  { title: 'Category B', data: ['Product B1', 'Product B2'] },
  { title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3'] },
];

const products = [
  { id: '1', name: 'Product A', price: '10.00' },
  { id: '2', name: 'Product B', price: '15.00' },
  { id: '3', name: 'Product C', price: '20.00' },
];

const ProductList = () => {
  const handlePress = (productName) => {
    Alert.alert('Product Selected', `You selected: ${productName}`);
  };

  const renderFlatListItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.name)} style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>${item.price}</Text>
    </TouchableOpacity>
  );

  const renderSectionItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)} style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.listTitle}>FlatList - Individual Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderFlatListItem}
      />

      <Text style={styles.listTitle}>SectionList - Grouped Products</Text>
      <SectionList
        sections={groupedProducts}
        keyExtractor={(item, index) => item + index}
        renderItem={renderSectionItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  headerContainer: {
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default ProductList;
