import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function HomeScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../Beslenme/assets/image_converted.png')} style={styles.image} />
      <TextInput style={styles.input} placeholder="Kullanıcı Adı" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Şifre" placeholderTextColor="#888" secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Page1')}>
        <Text style={styles.buttonText}>GİRİŞ YAP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Kayıt')} style={styles.signUpButton}>
        <Text style={styles.signUpText}>Üye değil misin? <Text style={styles.signUpLinkText}>Üye Ol.</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  image: {
    width: 350,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#b3ff00',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#C4F200',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpButton: {
    marginTop: 20,
  },
  signUpText: {
    color: '#333',
    fontSize: 16,
  },
  signUpLinkText: {
    color: '#C4F200',
    fontWeight: 'bold',
  },
});
