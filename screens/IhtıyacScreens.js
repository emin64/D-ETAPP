import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function Ihtıyac({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/party.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Düşük Kalorili Tarifler</Text>
          </View>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/doğum.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Yüksek Proteinli Tarifler</Text>
          </View>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/yılbaşı.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Düşük Karbonhidratlı Tarifler</Text>
          </View>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/barbekü.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Lif Zengini Tarifler</Text>
          </View>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/atıştırma.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Vitamin Ve Mineral Ağırlıklı Tarifler</Text>
          </View>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        
    
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
  },
  contentContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 130,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
  historyButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyText: {
    color: 'white',
    marginLeft: 5,
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Yarı saydam siyah arka plan
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
