import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import bestSelling from "../../data/bestSelling";

const { width } = Dimensions.get("window");

const BestSellingSlider = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <View style={styles.bottomRow}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={bestSelling}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    elevation: 3,
    marginRight: 16,
    width: 140,
    height: 160,
  },
  image: {
    width: 103,
    height: 60,
    resizeMode: "contain",
    marginBottom: 8,
    alignContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left",
  },
  desc: {
    fontSize: 10,
    color: "gray",
    marginBottom: 8,
    textAlign: "left",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
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
  addText: {
    color: "white",
    fontSize: 16,
  },
  flatListContainer: {
    paddingVertical: 10,
  },
});

export default BestSellingSlider;
