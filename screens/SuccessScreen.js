import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
             source={{ uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png' }}
            style={styles.backIcon}
          />
          </TouchableOpacity>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>

      {/* Success Content */}
      <View style={styles.content}>
        <Image
          source={require('../assets/Group 167.png')}
          style={styles.terminalImage}
        />
        <Text style={styles.title}>Payment Success, Yayy!</Text>
        <Text style={styles.message}>
          we will send order details and invoice in your contact no. and registered email
        </Text>
        <TouchableOpacity style={styles.checkDetails}>
          <Text style={styles.checkDetailsText}>
            Check Details <Text style={styles.arrow}>→</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    margin: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  terminalImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 20,
  },
  checkDetails: {
    marginBottom: 20,
  },
  checkDetailsText: {
    fontSize: 16,
    color: '#007bff',
  },
  arrow: {
    fontSize: 16,
  },
  downloadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;