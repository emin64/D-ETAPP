import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function BaseltrScreens() {
  return (
    <View style={styles.container}>
      <FontAwesome name="credit-card" size={56} color="#9DC944" />
      <Text style={styles.title}>BASELTR Alım İşlemi</Text>
      
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Mevcut BASELTR:</Text>
        <Text style={styles.balanceAmount}>318 BASELTR</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <FontAwesome name="shopping-cart" size={24} color="white" />
          <Text style={styles.optionText}>50 BASELTR Al</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <FontAwesome name="shopping-cart" size={24} color="white" />
          <Text style={styles.optionText}>100 BASELTR Al</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <FontAwesome name="shopping-cart" size={24} color="white" />
          <Text style={styles.optionText}>250 BASELTR Al</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <FontAwesome name="shopping-cart" size={24} color="white" />
          <Text style={styles.optionText}>500 BASELTR Al</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // Beyaz arka plan
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333333',
  },
  balanceContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  balanceLabel: {
    fontSize: 18,
    color: '#333333',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9DC944',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  optionButton: {
    backgroundColor: '#9DC944',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
  },
});

