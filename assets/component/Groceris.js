import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";

const { width } = Dimensions.get("window");
import categoryData from "../../data/categoryData";
const CategorySlider = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.categoryName}>{item.categoryName}</Text>
    </View>
  );

  return (
    <FlatList
      data={categoryData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      //   contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingVertical: 12,
    marginRight: 16,
    width: width * 0.7,
    height: 90,
  },
  image: {
    width: 72,
    height: 72,
    resizeMode: "contain",
    marginBottom: 8,
    marginLeft: 20,
  },
  categoryName: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333",
  },
  flatListContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default CategorySlider;
