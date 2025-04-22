import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import ExclusiveSlider from "../assets/component/ExclusiveSlider";
import BestSellingSlider from "../assets/component/BestSellingSlider";
import CategorySlider from "../assets/component/Groceris";
import GroceriesSlider from "../assets/component/GroceriesSlider";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/carot.png")}
          style={styles.carotImage}
          resizeMode="contain"
        />
        <View style={styles.locationContainer}>
          <Image
            source={require("../assets/map.png")}
            style={styles.mapImage}
          />
          <Text style={styles.locationText}>Dhaka, Banaasre</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/kinh-lup.png")}
          style={styles.searchIcon}
          resizeMode="contain"
        />
        <TextInput placeholder="Search Store" style={styles.searchInput} />
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={require("../assets/banner.png")}
          style={styles.bannerImage}
        />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Exclusive Offer</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.sliderContainer}>
        <ExclusiveSlider />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Best Selling</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.sliderContainer}>
        <BestSellingSlider />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Groceries</Text>
        <Text style={styles.seeAllText}>See all</Text>
      </View>
      <View style={styles.sliderContainer}>
        <CategorySlider />
      </View>
      <View style={styles.sliderContainer}>
        <GroceriesSlider />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
  },
  headerContainer: {
    alignItems: "center",
  },
  carotImage: {
    width: 25,
    height: 25,
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mapImage: {
    marginRight: 5,
  },
  locationText: {},
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  searchIcon: {
    width: 15,
    height: 15,
  },
  searchInput: {
    fontSize: 12,
    flex: 1,
  },
  bannerContainer: {},
  bannerImage: {
    width: 338,
    height: 100,
    borderRadius: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    color: "#181725",
    fontWeight: "600",
  },
  seeAllText: {
    fontSize: 13,
    color: "#53B175",
    fontWeight: "600",
  },
  sliderContainer: {},
});
