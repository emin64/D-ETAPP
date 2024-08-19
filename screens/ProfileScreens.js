import React from 'react';
import { StyleSheet, Text, View, Switch, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ProfileScreens({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Text style={styles.profileInitials}>MC</Text>
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Mehmet Emin Cengiz</Text>
            <Text style={styles.profileEmail}>m.emin@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.arrowContainer}>
            <Text style={styles.arrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <Text style={styles.progressText}>BASELTR Durumu</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
      </View>

      <View style={styles.optionContainer}>
        <OptionItem text="Bilgilerim" icon="user-friends" navigation={navigation} route="Bilgi" />
        <OptionItem text="Takvimim" icon="calendar-alt" navigation={navigation} route="Takvim" />
        <OptionItem text="BASELTR İşlemleri" icon="coins"  navigation={navigation} route="Baseltr"/>
        <ToggleItem text="E-posta" icon="envelope" />
        <ToggleItem text="SMS" icon="sms" />
        <ToggleItem text="Uygulama içi mesajlar" icon="comments" defaultValue={true} />
        <ToggleItem text="Kamera" icon="camera" />
        <ToggleItem text="Konum" icon="map-marker-alt" />
        <ToggleItem text="Bildirim" icon="bell" />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const OptionItem = ({ text, icon, navigation, route }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        if (route) {
          navigation.navigate(route);
        }
      }}
    >
      <FontAwesome5 name={icon} size={24} color="#9DC944" style={styles.icon} />
      <Text style={styles.optionText}>{text}</Text>
      <Text style={styles.optionArrow}>{'>'}</Text>
    </TouchableOpacity>
  );
  
  const ToggleItem = ({ text, icon, defaultValue = false }) => (
    <View style={styles.option}>
      <FontAwesome5 name={icon} size={24} color="#9DC944" style={styles.icon} />
      <Text style={styles.optionText}>{text}</Text>
      <Switch value={defaultValue} trackColor={{ false: '#767577', true: '#9DC944' }} thumbColor="#FFF" />
    </View>
  );
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  header: {
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    padding: 15,
    borderRadius: 10,
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#9DC944',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  profileInitials: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  profileEmail: {
    fontSize: 14,
    color: '#999999',
  },
  arrowContainer: {
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 20,
    color: '#000000',
  },
  optionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#333333',
    borderRadius: 10,
    height: 60,
  },
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
  },
  optionArrow: {
    fontSize: 20,
    color: '#9DC944',
  },
  progressBarContainer: {
    marginVertical: 20,
    bottom:20,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    width: '70%',
    backgroundColor: '#9DC944',
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#FF4D4D',
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
