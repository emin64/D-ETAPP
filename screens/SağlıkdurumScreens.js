import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function SağlıkdurumScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Time')}>
          <Image source={require('../../Beslenme/assets/kahvaltı.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Diyabet</Text>
          </View>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat4')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Time')}>
          <Image source={require('../../Beslenme/assets/öğle.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Kalp Sağlığı</Text>
          </View>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat4')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Time')}>
          <Image source={require('../../Beslenme/assets/öğle.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Sindirim Sorunları</Text>
          </View>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat4')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Time')}>
          <Image source={require('../../Beslenme/assets/öğle.jpg')} style={styles.cardImage} />
          <View style={styles.textOverlay}>
            <Text style={styles.cardText}>Böbrek Hastalıkları</Text>
          </View>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat4')}>
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
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 130,
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
});
