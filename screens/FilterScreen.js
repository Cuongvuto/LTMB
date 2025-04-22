import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FilterScreen({ navigation }) {
  // State for selected categories (nothing selected by default)
  const [categories, setCategories] = useState([
    { name: "Eggs", selected: false },
    { name: "Noodles & Pasta", selected: false },
    { name: "Chips & Crisps", selected: false },
    { name: "Fast Food", selected: false },
  ]);

  // State for selected brands (nothing selected by default)
  const [brands, setBrands] = useState([
    { name: "Individual Collection", selected: false },
    { name: "Cocola", selected: false },
    { name: "Ifod", selected: false },
    { name: "Kazi Farmas", selected: false },
  ]);

  // Toggle category selection
  const toggleCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].selected = !updatedCategories[index].selected;
    setCategories(updatedCategories);
  };

  // Toggle brand selection
  const toggleBrand = (index) => {
    const updatedBrands = [...brands];
    updatedBrands[index].selected = !updatedBrands[index].selected;
    setBrands(updatedBrands);
  };

  // Render category item
  const renderCategoryItem = ({ item, index }) => (
    <Pressable
      style={styles.checkboxContainer}
      onPress={() => toggleCategory(index)}
    >
      <View style={[styles.checkbox, item.selected && styles.checkboxSelected]}>
        {item.selected && (
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        )}
      </View>
      <Text style={styles.checkboxLabel}>{item.name}</Text>
    </Pressable>
  );

  // Render brand item
  const renderBrandItem = ({ item, index }) => (
    <Pressable
      style={styles.checkboxContainer}
      onPress={() => toggleBrand(index)}
    >
      <View style={[styles.checkbox, item.selected && styles.checkboxSelected]}>
        {item.selected && (
          <Ionicons name="checkmark" size={16} color="#FFFFFF" />
        )}
      </View>
      <Text style={styles.checkboxLabel}>{item.name}</Text>
    </Pressable>
  );

  // Handle Apply Filter button press
  const applyFilters = () => {
    // Get selected categories and brands
    const selectedCategories = categories
      .filter((category) => category.selected)
      .map((category) => category.name);
    const selectedBrands = brands
      .filter((brand) => brand.selected)
      .map((brand) => brand.name);

    // Navigate back to ProductsScreen and pass the selected filters
    navigation.navigate("SearchScreen", {
      selectedCategories,
      selectedBrands,
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
      </View>

      {/* Categories Section */}
      <Text style={styles.sectionTitle}>Category</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.name}
        scrollEnabled={false}
      />

      {/* Brands Section */}
      <Text style={styles.sectionTitle}>Brand</Text>
      <FlatList
        data={brands}
        renderItem={renderBrandItem}
        keyExtractor={(item) => item.name}
        scrollEnabled={false}
      />

      {/* Apply Filter Button */}
      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#181725",
    flex: 1,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181725",
    marginTop: 20,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#E2E2E2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkboxSelected: {
    backgroundColor: "#53B175",
    borderColor: "#53B175",
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#181725",
  },
  applyButton: {
    backgroundColor: "#53B175",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
