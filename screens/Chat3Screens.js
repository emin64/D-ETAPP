import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function WeeklyNutritionProgram({ navigation }) {
  const meals = [
    { meal: 'Yulaf Ezmesi', description: 'Yulafı sütle pişirin ve üzerine bal, meyve ve ceviz ekleyin.' },
    { meal: 'Tavuk Salata', description: 'Izgara tavuk göğsünü doğrayın ve taze yeşilliklerle karıştırın.' },
    { meal: 'Izgara Balık', description: 'Balığı zeytinyağı ve baharatlarla marine edin, ardından ızgarada pişirin.' },
    { meal: 'Omlet', description: 'Yumurtaları çırpın ve sebzelerle birlikte tavada pişirin.' },
    { meal: 'Mercimek Çorbası', description: 'Kırmızı mercimeği soğan, sarımsak ve baharatlarla haşlayarak çorba yapın.' },
    { meal: 'Sebzeli Pilav', description: 'Pirinç ve sebzeleri birlikte pişirerek sebzeli pilav hazırlayın.' },
    { meal: 'Smoothie', description: 'Meyve, yoğurt ve balı blenderdan geçirin, buz ekleyin.' },

  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../Beslenme/assets/image_converted.png')} style={styles.logoImage} />
      </View>
 

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        {meals.map((item, index) => (
          <View key={index} style={styles.mealContainer}>
            <Text style={styles.mealTitle}>{item.meal}</Text>
            <Text style={styles.mealDescription}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Page1')}>
            <Icon name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Life')}>
            <Icon name="flash-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Page2')}>
            <Icon name="grid-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerIcon, styles.selectedFooterIcon]} onPress={() => navigation.navigate('Chat')}>
            <Icon name="chatbubble-outline" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Takvim')}>
            <Icon name="calendar-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  mealContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    width: 200,
    alignItems: 'center',
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  footerContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    position: 'relative',
    marginHorizontal: 10,
  },
  footerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2B2B2B',
  },
  selectedFooterIcon: {
    backgroundColor: '#E6E6E6',
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#00FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
  },
  logoImage: {
    width: 400,
    height: 50,
    resizeMode: 'contain',
  },
});
