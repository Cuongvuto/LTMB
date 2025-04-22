import React, { useState, useEffect } from "react"; // Add useEffect
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import productsData from "../data";
import Icon from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("window");
const cardWidth = (width - 50) / 2;

export default function ProductsScreen({ navigation, route }) {
  // Add route prop
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(productsData); // Initially show all products
  const [selectedCategories, setSelectedCategories] = useState([]); // Store selected categories
  const [selectedBrands, setSelectedBrands] = useState([]); // Store selected brands

  // Update filters when navigating back from FilterScreen
  useEffect(() => {
    const newCategories = route?.params?.selectedCategories || [];
    const newBrands = route?.params?.selectedBrands || [];
    setSelectedCategories(newCategories);
    setSelectedBrands(newBrands);
    applyFilters(newCategories, newBrands, searchQuery); // Re-apply filters with current search query
  }, [route?.params?.selectedCategories, route?.params?.selectedBrands]);

  // Apply filters based on categories, brands, and search query
  const applyFilters = (categories, brands, query) => {
    let filtered = [...productsData];

    // Filter by categories
    if (categories.length > 0) {
      filtered = filtered.filter((product) => {
        // Infer category based on product name
        if (
          categories.includes("Eggs") &&
          product.name.toLowerCase().includes("egg")
        ) {
          return true;
        }
        if (
          categories.includes("Noodles & Pasta") &&
          (product.name.toLowerCase().includes("noodles") ||
            product.name.toLowerCase().includes("pasta"))
        ) {
          return true;
        }
        // Add more category conditions if needed (e.g., Chips & Crisps, Fast Food)
        return false;
      });
    }

    // Filter by brands
    if (brands.length > 0) {
      filtered = filtered.filter((product) => brands.includes(product.brand));
    }

    // Filter by search query
    if (query.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(selectedCategories, selectedBrands, query); // Re-apply filters with new search query
  };

  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: cardWidth }]}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            height: 40,
            borderColor: "#E2E2E2",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginBottom: 15,
            backgroundColor: "#F5F5F5",
          }}
        >
          <Icon name="search-outline" size={20} color={"#333333"} />
          {/* Search Bar */}
          <TextInput
            style={styles.searchBar}
            placeholder="Search products..."
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
          <Image
            source={require("../assets/filter.png")}
            style={{ width: 15, height: 15, marginLeft: 15, marginBottom: 15 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#181725",
    textAlign: "center",
    marginBottom: 15,
  },
  searchBar: {
    alignContent: "flex-start",
    flex: 1, // Ensure the TextInput takes up remaining space
    marginLeft: 5, // Add some spacing between the icon and the text input
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: "80%",
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725",
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725",
  },
  addButton: {
    backgroundColor: "#53B175",
    borderRadius: 10,
    padding: 4,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 20,
    color: "#FFFFFF",
    lineHeight: 20,
  },
});
