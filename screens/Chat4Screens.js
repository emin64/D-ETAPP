import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Chat4Screens({ navigation }) {
  const daysOfWeek = [
    { day: 'Pazartesi', meals: { breakfast: 'Yulaf Ezmesi', lunch: 'Tavuk Salata', dinner: 'Izgara Balık', snacks: 'Badem, Elma' } },
    { day: 'Salı', meals: { breakfast: 'Omlet', lunch: 'Mercimek Çorbası', dinner: 'Sebzeli Pilav', snacks: 'Yoğurt, Fındık' } },
    { day: 'Çarşamba', meals: { breakfast: 'Smoothie', lunch: 'Ton Balıklı Salata', dinner: 'Makarna', snacks: 'Meyve, Kuruyemiş' } },
    { day: 'Perşembe', meals: { breakfast: 'Tam Tahıllı Ekmek', lunch: 'Izgara Tavuk', dinner: 'Sebze Çorbası', snacks: 'Yoğurt, Ceviz' } },
    { day: 'Cuma', meals: { breakfast: 'Meyveli Yoğurt', lunch: 'Kıymalı Makarna', dinner: 'Pizza', snacks: 'Fındık, Çikolata' } },
    { day: 'Cumartesi', meals: { breakfast: 'Pancake', lunch: 'Peynirli Börek', dinner: 'Izgara Et', snacks: 'Kek, Çay' } },
    { day: 'Pazar', meals: { breakfast: 'Menemen', lunch: 'Balık Ekmek', dinner: 'Mantı', snacks: 'Tatlı, Meyve' } },
  ];

  return (
    <View style={styles.container}>
         <View style={styles.logoContainer}>
        <Image source={require('../../Beslenme/assets/image_converted.png')} style={styles.logoImage} />
      </View>
      

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayTitle}>{day.day}</Text>
            <View style={styles.mealContainer}>
              <Text style={styles.mealType}>Kahvaltı:</Text>
              <Text style={styles.mealText}>{day.meals.breakfast}</Text>
            </View>
            <View style={styles.mealContainer}>
              <Text style={styles.mealType}>Öğle Yemeği:</Text>
              <Text style={styles.mealText}>{day.meals.lunch}</Text>
            </View>
            <View style={styles.mealContainer}>
              <Text style={styles.mealType}>Akşam Yemeği:</Text>
              <Text style={styles.mealText}>{day.meals.dinner}</Text>
            </View>
            <View style={styles.mealContainer}>
              <Text style={styles.mealType}>Ara Öğün:</Text>
              <Text style={styles.mealText}>{day.meals.snacks}</Text>
            </View>
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
  dayContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    width: 200,
    alignItems: 'center',
  },
  dayTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mealContainer: {
    marginBottom: 15,
  },
  mealType: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  mealText: {
    fontSize: 14,
    color: '#555',
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
