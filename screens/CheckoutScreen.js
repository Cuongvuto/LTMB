import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CheckoutScreen = ({ navigation }) => {
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
        <View style={styles.headerRight}>
          <Text style={styles.amount}>₹1,527</Text>
          <Text style={styles.gst}>Including GST (18%)</Text>
        </View>
      </View>

      {/* Payment Options */}
      <Text style={styles.title}>Checkout</Text>
      <View style={styles.options}>
        <TouchableOpacity style={[styles.option, styles.activeOption]}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/633/633611.png' }}
            style={styles.icon}
          />
          <Text style={styles.optionText}>Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image
            source={require('../assets/Apple icon.png')}
            style={styles.icon}
          />
          <Text style={styles.optionText}>Apple Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <Text style={styles.label}>CARD NUMBER</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value="5261 4141 0151 8472"
          editable={false}
        />
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/633/633611.png' }}
          style={styles.cardIcon}
        />
      </View>

      <Text style={styles.label}>CARDHOLDER NAME</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value="Christie Doe"
          editable={false}
        />
        <Image
          source={require('../assets/Master Card Logo (1).png')}
          style={styles.cardIcon}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={styles.label}>EXPIRY DATE</Text>
          <TextInput
            style={styles.input}
            value="06 / 2024"
            editable={false}
          />
        </View>
        <View style={styles.col}>
          <Text style={styles.label}>
            CVV / CVC <Text style={styles.info}>?</Text>
          </Text>
          <TextInput
            style={styles.input}
            value="915"
            editable={false}
          />
        </View>
      </View>

      <Text style={styles.note}>
        We will send you an order details to your email after the successfully payment
      </Text>

      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate('Success')}
      >
        <LinearGradient
          colors={['#28a745', '#34d058']}
          style={styles.gradientButton}
        >
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png' }}
            style={styles.lockIcon}
          />
          <Text style={styles.payButtonText}>Pay for the order</Text>
        </LinearGradient>
      </TouchableOpacity>
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
    marginTop: 50, // Đẩy header xuống dưới
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
  headerRight: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#25D482', // Cập nhật màu chữ thành #25D482
  },
  gst: {
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  options: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  option: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginRight: 10,
  },
  activeOption: {
    backgroundColor: '#e6f7e9',
    borderColor: '#28a745',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  inputContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  cardIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
    width: 15,
    height: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
    marginRight: 10,
  },
  info: {
    color: '#28a745',
  },
  note: {
    fontSize: 12,
    color: '#888',
    marginBottom: 20,
  },
  payButton: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  lockIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;