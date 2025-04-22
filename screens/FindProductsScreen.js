import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity, // Add TouchableOpacity for clickable cards
} from "react-native";
import groceryData2 from "../data/GroceryData";

const { width } = Dimensions.get("window");
const cardWidth = (width - 50) / 2;

export default function FindProductsScreen({ navigation }) {
  // Add navigation prop
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        // Navigate to ProductsScreen with initial search query "Egg" if the category is "Dairy & Egg"
        if (item.namegroceris === "Dairy & Eggs") {
          navigation.navigate("SearchScreen");
        }
      }}
    >
      <View
        style={[
          styles.card,
          {
            backgroundColor: item.background,
            borderColor: item.borderColor,
            width: cardWidth,
          },
        ]}
      >
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.categoryName}>{item.namegroceris}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Find Products</Text>

      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/kinh-lup.png")}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        <TextInput placeholder="Search Store" style={styles.searchInput} />
      </View>

      <FlatList
        data={groceryData2}
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#7C7C7C",
    paddingVertical: 10,
  },
  searchIcon: {
    fontSize: 16,
    color: "#7C7C7C",
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 1,
  },
  image: {
    width: "80%",
    height: "60%",
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725",
    textAlign: "center",
  },
});
