import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function DietScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Kilo')}>
          <Image source={require('../../Beslenme/assets/normal.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Kilo Kontrolu İçin Beslenme</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('YaşamTarzı')}>
          <Image source={require('../../Beslenme/assets/vegan.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Yaşam Tarzına Göre Beslenme</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ÖzelDurum')}>
          <Image source={require('../../Beslenme/assets/vejetaryen.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Özel Durumlara Göre Beslenme</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SağlıkDurum')}>
          <Image source={require('../../Beslenme/assets/akdeniz.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Sağlık Durumuna Göre Beslenme</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Spor')}>
          <Image source={require('../../Beslenme/assets/keto.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Spor Ve Performans Beslenmesi</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detoks')}>
          <Image source={require('../../Beslenme/assets/keto.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Detoks Ve Temizlik Beslenmesi</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
      <View style={styles.footerContainer}>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerIcon } onPress={() => navigation.navigate('Page1')}>
            <Icon name="home-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon}>
            <Icon name="flash-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerIcon,styles.selectedFooterIcon]} onPress={() => navigation.navigate('Page2')}>
            <Icon name="grid-outline" size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon}>
            <Icon name="chatbubble-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerIcon}>
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
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 150,
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
  historyButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  historyText: {
    color: '#FFF',
    marginLeft: 5,
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
