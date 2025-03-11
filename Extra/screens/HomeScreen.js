import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      {/* Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.insights}>
        <TouchableOpacity
          style={[styles.card, styles.shadow]}
          onPress={() => navigation.navigate("Scan")}
        >
          <Ionicons name="scan-outline" size={28} color="#4CAF50" />
          <Text style={styles.cardText}>Scan new</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.shadow]}>
          <Ionicons name="alert-circle-outline" size={28} color="#FF9800" />
          <Text style={styles.cardText}>Counterfeits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.shadow]}>
          <Ionicons name="checkmark-circle-outline" size={28} color="#2196F3" />
          <Text style={styles.cardText}>Success</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, styles.shadow]}>
          <Ionicons name="calendar-outline" size={28} color="#9C27B0" />
          <Text style={styles.cardText}>Directory</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

  // Header Styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  greeting: { fontSize: 18, color: "#333" },
  name: { fontSize: 22, fontWeight: "bold", color: "#000" },
  avatar: { width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: "#ccc" },

  // Section Title
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 15, color: "#333" },

  // Insights (Cards)
  insights: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    gap: 10,
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  cardText: { 
    marginTop: 8, 
    fontSize: 14, 
    fontWeight: "600", 
    color: "#333" 
  },

  // Shadow Effect
  shadow: {
    elevation: 5, // Android Shadow
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 3 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
  },
});
