import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LifeScreens({ navigation }) {
  return (
    <View style={styles.container}>
       <View style={styles.logoContainer}>
        <Image source={require('../../Beslenme/assets/image_converted.png')} style={styles.logoImage} />
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat2')}>
            <Image source={require('../../Beslenme/assets/kış.jpg')} style={styles.cardImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.cardText}>Egzersiz Koçu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat2')}>
            <Image source={require('../../Beslenme/assets/party.jpg')} style={styles.cardImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.cardText}>Arkadaş Sorunları</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat2')}>
            <Image source={require('../../Beslenme/assets/akdeniz.jpg')} style={styles.cardImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.cardText}>Sanat</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat2')}>
            <Image source={require('../../Beslenme/assets/yılbaşı.jpg')} style={styles.cardImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.cardText}>Aile Problemleri</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat2')}>
            <Image source={require('../../Beslenme/assets/yaz.jpg')} style={styles.cardImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.cardText}>Hayvanlar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat2')}>
            <Image source={require('../../Beslenme/assets/vegan.jpg')} style={styles.cardImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.cardText}>Yemekler</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat2')}>
            <Image source={require('../../Beslenme/assets/ilkbahar.jpg')} style={styles.cardImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.cardText}>Sanat</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat2')}>
            <Image source={require('../../Beslenme/assets/sonbahar.jpg')} style={styles.cardImage} />
            <View style={styles.textOverlay}>
              <Text style={styles.cardText}>Aile Problemleri</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerIcon}  onPress={() => navigation.navigate('Page1')}>
            <Icon name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerIcon,styles.selectedFooterIcon]}  onPress={() => navigation.navigate('Life')}>
            <Icon name="flash-outline" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate('Page2')}>
            <Icon name="grid-outline" size={24} color="#FFFFFF" />
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    flex: 1,
    marginHorizontal: 5,
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Siyah arka plan %50 şeffaflık
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
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
