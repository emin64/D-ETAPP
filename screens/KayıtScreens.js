import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function KayıtScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../Beslenme/assets/image_converted.png')} style={styles.image} />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Kullanıcı Adı" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Şifre" placeholderTextColor="#888" secureTextEntry={true} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>KAYIT OL</Text>
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
    height: 70,
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
});
