import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetailScreen() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/arrow.png")}
          style={{ position: "absolute", top: 20, left: 20 }}
        ></Image>
        <Image
          source={require("../assets/export.png")}
          style={{ position: "absolute", top: 20, right: 20 }}
        ></Image>
        <Image
          source={require("../assets/bigApple.png")}
          style={styles.productImage}
          resizeMode="contain"
        />
        <View style={styles.carouselDots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={styles.infoContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.productName}>Naturel Red Apple</Text>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={24} color="#FF6347" />
            </TouchableOpacity>
          </View>
          <Text style={styles.productDesc}>1kg, Price</Text>

          <View style={styles.quantityPriceRow}>
            <View style={styles.quantitySelector}>
              <TouchableOpacity onPress={handleDecrease}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={handleIncrease}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>${(4.99 * quantity).toFixed(2)}</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Ionicons name="chevron-down" size={20} color="#181725" />
          </View>
          <Text style={styles.sectionContent}>
            Apples Are Nutritious. Apples May Be Good For Weight Loss. Apples
            May Be Good For Your Heart. As Part Of A Healthful And Varied Diet.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nutrition</Text>
            <View style={styles.nutritionWeight}>
              <View
                style={{
                  padding: 5,
                  backgroundColor: "#E5E5E5",
                  borderRadius: 5,
                }}
              >
                <Text style={styles.nutritionWeightText}>100gr</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </View>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Review</Text>
            <View style={styles.reviewStars}>
              {[...Array(5)].map((_, index) => (
                <Ionicons
                  key={index}
                  name="star"
                  size={16}
                  color="#F4A261"
                  style={styles.star}
                />
              ))}
              <Ionicons name="chevron-forward" size={20} color="#181725" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    paddingVertical: 20,
    marginVertical: 10,
  },
  productImage: {
    width: "100%",
    height: 200,
  },
  carouselDots: {
    flexDirection: "row",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#53B175",
  },
  infoContainer: {
    marginVertical: 15,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#181725",
  },
  productDesc: {
    fontSize: 14,
    color: "#7C7C7C",
    marginVertical: 5,
  },
  quantityPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  quantityButton: {
    fontSize: 24,
    color: "#181725",
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#181725",
    paddingHorizontal: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#181725",
  },
  sectionContainer: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    paddingBottom: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#181725",
  },
  sectionContent: {
    fontSize: 14,
    color: "#7C7C7C",
    lineHeight: 20,
  },
  nutritionWeight: {
    flexDirection: "row",
    alignItems: "center",
  },
  nutritionWeightText: {
    fontSize: 9,
    color: "#7C7C7C",
    marginRight: 5,
  },
  reviewStars: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    marginRight: 3,
  },
  addButton: {
    backgroundColor: "#53B175",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 20,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
