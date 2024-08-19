import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity, Modal, Pressable } from 'react-native';

export default function BilgiScreens() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Erkek');
  const [hasDisease, setHasDisease] = useState(false);
  const [diseaseName, setDiseaseName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>MC</Text>
        </View>
        <View style={styles.avatarButtons}>
          <TouchableOpacity style={styles.avatarButton}>
            <Text style={styles.avatarButtonText}>Resim Çek</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatarButton}>
            <Text style={styles.avatarButtonText}>Resim Yükle</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
          placeholder="Kilonuzu girin"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
          placeholder="Boyunuzu girin"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
          placeholder="Yaşınızı girin"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.genderButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.genderText}>{gender}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.inputLabel}>Hastalık:</Text>
          <Switch
            value={hasDisease}
            onValueChange={setHasDisease}
            trackColor={{ false: '#D3D3D3', true: '#9DC944' }}
            thumbColor={hasDisease ? '#FFF' : '#FFF'}
          />
          <Text style={styles.switchLabel}>{hasDisease ? 'Var' : 'Yok'}</Text>
        </View>
        {hasDisease && (
          <TextInput
            style={styles.diseaseInput}
            value={diseaseName}
            onChangeText={setDiseaseName}
            placeholder="Hastalığınızı girin"
            placeholderTextColor="#999"
          />
        )}
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Bilgileri Kaydet</Text>
      </TouchableOpacity>

      {/* Cinsiyet Seçim Modalı */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable style={styles.modalOption} onPress={() => handleGenderSelect('Erkek')}>
              <Text style={styles.modalOptionText}>Erkek</Text>
            </Pressable>
            <Pressable style={styles.modalOption} onPress={() => handleGenderSelect('Kadın')}>
              <Text style={styles.modalOptionText}>Kadın</Text>
            </Pressable>
            <Pressable style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseButtonText}>Kapat</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 34,
    color: '#555555',
  },
  avatarButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatarButton: {
    backgroundColor: '#9DC944',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  avatarButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#333333',
  },
  genderButton: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  genderText: {
    fontSize: 16,
    color: '#333333',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 14,
    color: '#555555',
    marginLeft: 10,
  },
  diseaseInput: {
    marginTop: 10,
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#333333',
  },
  submitButton: {
    marginTop: -6,
    paddingVertical: 15,
    backgroundColor: '#9DC944',
    borderRadius: 20,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalOption: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 18,
    color: '#333333',
  },
  modalCloseButton: {
    marginTop: 5,
    paddingVertical: 10,
    backgroundColor: '#CCCCCC',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: 'bold',
  },
});
