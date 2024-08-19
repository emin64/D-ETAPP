import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function CountryScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/türk.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>  Türk Mutfağı</Text>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/italya.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>İtalyan Mutfağı</Text>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/meksika.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Meksika Mutfağı</Text>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/çin.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>   Çin Mutfağı</Text>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/japonya.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Japon Mutfağı</Text>
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('Chat3')}>
            <Icon name="time-outline" size={20} color="white" />
            <Text style={styles.historyText}>Geçmiş</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Chat3')}>
          <Image source={require('../../Beslenme/assets/hindistan.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>  Hint Mutafğı</Text>
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
    backgroundColor: '#e6e6fa',
  },
  contentContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: '#473c8b',
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
  },
  cardImage: {
    width:120,
    borderRadius:100,
    top:11,
    height: 120,
    marginHorizontal:120,
  },
  cardText: {
    color: 'white',
    padding: 10,
    top:7,
    fontSize: 16,
    marginHorizontal:120,
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
