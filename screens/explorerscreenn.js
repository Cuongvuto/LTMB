import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const ExplorerScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Search for meals or area"
        style={styles.searchBar}
      />

      <Text style={styles.sectionTitle}>Top Categories</Text>
      <ScrollView horizontal>
        <Image
          source={require("../../assets/banhmy.png")}
          style={styles.categoryImage}
        />
        <Image
          source={require("../../assets/banhmy.png")}
          style={styles.categoryImage}
        />
        <Image
          source={require("../../assets/banhmy.png")}
          style={styles.categoryImage}
        />
      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Items</Text>
      <ScrollView horizontal>
        <Image
          source={require("../../assets/banhmy.png")}
          style={styles.itemImage}
        />
        <Image
          source={require("../../assets/banhmy.png")}
          style={styles.itemImage}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
  searchBar: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  categoryImage: { width: 100, height: 100, marginRight: 10, borderRadius: 10 },
  itemImage: { width: 150, height: 100, marginRight: 10, borderRadius: 10 },
});

export default ExplorerScreen;
