import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function FoodScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('MealTime')}>
          <Image source={require('../../Beslenme/assets/vakit.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Yemek Türüne Göre</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('FoodTrch')}>
          <Image source={require('../../Beslenme/assets/tercih.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Özel Diyetlere Göre</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Country')}>
          <Image source={require('../../Beslenme/assets/ulusal.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Ulusal Mutfaklara Göre</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Season')}>
          <Image source={require('../../Beslenme/assets/mevsim.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Pisirme Yöntemine Göre</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Days')}>
          <Image source={require('../../Beslenme/assets/özel.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Özel Günlere Göre</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Bütçe')}>
          <Image source={require('../../Beslenme/assets/party.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Bütçe Ve Malzeme Kolaylığına Göre</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Süre')}>
          <Image source={require('../../Beslenme/assets/saat1.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Hazırlanma Süresine Göre</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('İhtiyaç')}>
          <Image source={require('../../Beslenme/assets/normal.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Beslenme İhtiyaçlarına Göre</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Page1')}>
            <Icon name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Life')}>
            <Icon name="flash-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerIcon,styles.selectedFooterIcon]} onPress={() => navigation.navigate('Page2')}>
            <Icon name="grid-outline" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Chat')}>
            <Icon name="chatbubble-outline" size={24} color="#FFFFFF" />
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
  contentContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    borderColor: '#00FF00', // Yeşil kenarlık
    borderWidth: 2,
  },
  cardImage: {
    width: '100%',
    height: 109,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Yarı saydam siyah arka plan
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
  footerContainer: {
    position: 'relative',
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
});
